import styled, { css } from 'styled-components'
import { fadeIn, fadeOut } from "./utils";

const blueColor = "#1359A0"
const grayColor = "#575757"

export const ListDiv = styled.div`
  width: 20%;
  background-color: white;
  position: absolute;
  left: 2rem;
  top: 5.5rem;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.1);
  color: ${blueColor};
  padding: 1% 0;
  box-sizing: border-box;
  font-family: "Comfortaa", cursive;
  animation: ${fadeIn} .9s ease 1;
  text-align: center;

  @media (max-width: 1024px) {
    width: 25%;
  }

  @media (max-width: 900px) {
    width: 35%;
  }

  @media (max-width: 900px) and (orientation: landscape) {
    display: none;
    width: 100%;
    height: calc(100% - 3.5rem);
    top: 3.5rem;
    left: 0;
    border: none;
    border-radius: 0;
    transform: translateX(0);
    padding-top: 7%;
    box-shadow: none;

    ${props => props.sidebar && css`
        display: block;
    `};
  }

  @media (max-width: 700px) {
    display: none;
    width: 100%;
    height: calc(100% - 3.5rem);
    top: 3.5rem;
    left: 0;
    border: none;
    border-radius: 0;
    transform: translateX(0);
    padding-top: 7%;
    box-shadow: none;

    ${props => props.sidebar && css`
        display: block;
    `};
  }

  & label {
    color: ${blueColor};
    font-size: .7rem;

    @media (max-width: 1200px) {
      font-size: .6rem;
    }
  }

  & form {
    display: block;
    margin: 0 auto;
    width: 80%;
    height: 2rem;
  }

  & ul {
    text-align: left;
    margin: 0;
    padding: 0;

    &:focus {
      border: none;
      outline: none;
    }
  }

  & input {
    margin: 0 auto;
    display: inline-block;
    width: 80%;
    height: 100%;
    border: 1px solid ${blueColor};
    background-color: white;
    padding: 0.5rem;
    box-sizing: border-box;
  }

  & button {
    margin: 0;
    width: 20%;
    display: inline-block;
    color: white;
    background-color: ${blueColor};
    border: none;
    cursor: pointer;
    height: 100%;
    box-sizing: border-box;
    font-weight: 700;
  }

  & button.reset {
    margin: 1rem auto;
    display: block;
    color: white;
    background-color: ${blueColor};
    border-radius: 0.2rem;
    border: none;
    padding: 0.5rem 0.9rem;
    cursor: pointer;
    width: 50%;
    max-height: 2rem;

    @media (min-width: 1441px) {
      width: 35%;
    }

    @media (max-width: 700px) {
      width: 50%;
    }
  }

  & button.hide {
    display: none;

    @media (max-width: 700px) {
      display: block;
      color: white;
      background-color: ${blueColor};
      border-radius: 0.2rem;
      border: none;
      padding: 0.5rem 0.9rem;
      cursor: pointer;
      width: 50%;
      max-height: 2rem;
      margin: 1rem auto;
    }

    @media (max-width: 900px) and (orientation: landscape) {
      display: block;
      color: white;
      background-color: ${blueColor};
      border-radius: 0.2rem;
      border: none;
      padding: 0.5rem 0.9rem;
      cursor: pointer;
      width: 30%;
      max-height: 2rem;
      margin: 1rem auto;
    }
  }
`;

export const ShowMarkers = styled.div`
  display: none;

  @media (max-width: 900px) and (orientation: landscape) {
    position: absolute;
    background-color: ${blueColor};
    color: white;
    top: 4rem;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    width: 30%;
    text-align: center;
    padding: 2%;
    box-sizing: border-box;
    margin: 0 auto;
    border-radius: 0.5rem;
    ${props => !props.showMarkers && css`
        display: none;
    `};
  }

  @media (max-width: 700px) {
    position: absolute;
    background-color: ${blueColor};
    color: white;
    top: 4rem;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    width: 40%;
    text-align: center;
    padding: 2%;
    box-sizing: border-box;
    margin: 0 auto;
    border-radius: 0.5rem;

    ${props => !props.showMarkers && css`
        display: none;
    `};
  }
`;


export const Base = styled.div`
width: 100vw;
height: 100vh;
display: flex;
background-color: lightgray
color: white;
box-sizing: border-box;
`

export const SkipLink = styled.a`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  /* added line */
  border: 0;
`

export const MapErrorDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  text-align: center;
  color: ${blueColor};

  & h2 {
    width: 80%;
    margin: .2rem auto;
  }
`

export const DetailsDiv = styled.div`
width: 30%;
background-color: white;
position: absolute;
right: 0;
padding-top: 1.3%;
top: 3.5rem;
height: calc(100% - 3.5rem);
box-shadow: 10px 10px 15px rgba(0,0,0,0.1);
color: gray;
box-sizing: border-box;
transition: all 2s;
z-index: 2;
animation: ${fadeIn} .3s ease 1;

${props => props.unmouting && css`
  animation: ${fadeOut} .3s ease 1;
`};

@media (max-width: 1024px) {
  width: 40%;
}

@media (max-width: 768px) {
  width: 50%;
}

@media (max-width: 700px) {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0;
  transform: translateY(0);
  box-shadow: none;
  padding-top: 0;
}

& button {
  margin: 5% auto 0;
  display: block;
  color: white;
  background-color: ${blueColor};
  border-radius: .2rem;
  border: none;
  padding: .5rem .9rem;
  cursor: pointer;
  font-size: 1rem;

  @media (max-width: 700px) {
    font-size: 1.2rem;
    margin: 10% auto 5%;
  }
}

& img {
  width: 90%;

  @media (max-width: 700px) {
    width: 100%;
    border-radius: 0;
  }
}

& div {
  text-align: center;
}

& .small {
  font-family: 'Comfortaa', cursive;
  font-size: .8rem;
}

& #title {
  font-size: 1.5rem;
  margin-bottom: -.3rem;
  margin-top: .3rem;
  color: ${blueColor}
}

& p {  
  padding: 0 5%;
}
`
export const Spinner = styled.div`

display: block;
margin: 1rem auto;
position: relative;
width: 64px;
height: 64px;

& div {
position: absolute;
border: 4px solid ${blueColor};
opacity: 1;
border-radius: 50%;
animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

& div:nth-child(2) {
  animation-delay: -0.5s;
}

@keyframes lds-ripple {
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
}
`
export const LogoDiv = styled.div`
display: flex;
color: white;
padding: .5% 2%;
background-color: ${blueColor};
position: absolute;
left: 50%;
text-align: center;
transform: translateX(-50%);
font-family: 'Amatic SC', cursive;
z-index: 5;
box-sizing: border-box;
height: 3.5rem;
align-items: center;
justify-content: center;
width: 100%;

@media (max-width: 700px) {
  border-radius: 0;
  margin-top: 0;
}

& h1 {
  font-family: 'Amatic SC', cursive;
  font-size: 2.5rem;
}
`

export const MarkerS = styled.li`
  list-decoration: none;
  color: ${grayColor};
  font-size: 1rem;
  margin: 1.5rem auto;
  display: block;
  width: 80%;
  cursor: pointer;
  user-select: none;
  padding: 0 .8rem;

  &:focus {
    border: solid 2px ${blueColor};
    border-radius: .2rem;
    outline: none;
  }

  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  ${props => props.active && css`
      color: ${blueColor};
  `};
`;