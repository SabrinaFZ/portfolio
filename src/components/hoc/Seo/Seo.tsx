import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

interface SeoProps {
  title: string;
}

const withSeo =
  <P extends SeoProps>(Component: React.ComponentType<P & SeoProps>) =>
  (props: P) => {
    return (
      <>
        {props.title ? (
          <>
            <HelmetProvider>
              <Helmet
                title={props.title}
                titleTemplate={`%s | Sabrina's Portfolio`}
              />
              <Component {...props} />
            </HelmetProvider>
          </>
        ) : null}
      </>
    );
  };

export default withSeo;
