import React, {Component, ComponentClass} from "react";
import {StoreProvider} from "../../../store";


export function AuthenticationHoc(): <P extends object>(WrappedComponent: ComponentClass<P>) => void{
  return <P extends object>(WrappedComponent: ComponentClass<P>) => {
    return class Authentication extends Component<P>{

      componentDidMount(): void {
        console.log('...Authenticating')
      }

      render(): React.ReactNode {
        return (
          <StoreProvider>
            <WrappedComponent  {...this.props} />
          </StoreProvider>
        )
      }
    }
  }
}

