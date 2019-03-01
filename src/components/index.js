import React from 'react';
import styled from 'styled-components';

export const Scroller = styled.div`
  width: 100%;
  max-width: 100%;
  overflow: scroll;
`;

export const Hero = props => {
  let subtitle;
  let title;
  if (props.title) title = () => <h2 className="title">{props.title}</h2>;
  if (props.subtitle)
    subtitle = () => <h2 className="subtitle">{props.subtitle}</h2>;
  return (
    <section className="hero">
      <div className="hero-body">
        {title()}
        {subtitle()}
      </div>
    </section>
  );
};

export default { Scroller, Hero };
