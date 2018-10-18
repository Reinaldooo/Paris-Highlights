import React from 'react';
import styled, { css } from 'styled-components'

const DetailsDiv = styled.div`
width: 20%;
background-color: white;
position: absolute;
right: 8%;
top: 10%
transform: translateX(8%);
border-radius: .5rem;
box-shadow: 15px 15px 15px rgba(0,0,0,0.05);
color: lightcoral;
padding: 2%;
box-sizing: border-box;
transition: all .5s;
opacity: 1;

${props => !props.show && css`
  display: none;
`};

// & p {
//   ${props => !props.show && css`
//   display: none;
//   `};
// }

`

const Details = (props) => {

    return (
      <DetailsDiv show={props.show}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, deserunt earum illo consectetur sunt mollitia vitae repudiandae aspernatur sint, dolor, commodi odio necessitatibus. Error ad quisquam vel iste quod repudiandae.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, deserunt earum illo consectetur sunt mollitia vitae repudiandae aspernatur sint, dolor, commodi odio necessitatibus. Error ad quisquam vel iste quod repudiandae.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, deserunt earum illo consectetur sunt mollitia vitae repudiandae aspernatur sint, dolor, commodi odio necessitatibus. Error ad quisquam vel iste quod repudiandae.</p>
      </DetailsDiv>
    );
  }

export default Details;