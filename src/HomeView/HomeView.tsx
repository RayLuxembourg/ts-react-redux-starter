import React, { Component } from "react";
import homeReducer, { HomeActions } from "./state";
import * as homeActions from './state/actions'

import { connect } from "react-redux";
import "./HomeView.scss";
import { RootState } from "AppTypes";

import { Heart } from "../shared/components/Heart/Heart";

import { RouteComponentProps } from "react-router-dom";
import { AuthenticationHoc } from "../shared/components/Authentication/Authentication";
import { InjectReducer } from "../shared/utils/InjectReducer";
import { InjectEpic } from "../shared/utils/injectEpic";
import homeEpics from "./state/epics";

type RouteParams = {

}


type ClosetProps = {
  store:RootState
} & HomeActions & RouteComponentProps<RouteParams>

const mapStateToProps = (state: RootState) => ({
  store:state
});


@AuthenticationHoc()
@InjectReducer("home", homeReducer)
@InjectEpic(homeEpics)
// @ts-ignore
@connect(mapStateToProps,homeActions)
class HomeView extends Component<ClosetProps> {


  render() {
    return <Heart liked={this.props.store.home.liked} onClick={this.props.toggleHeartState}/>
  }
}


export default HomeView;
