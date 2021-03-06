import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
  box-sizing: border-box;
  transition: all ease .2s;
}

strong {
    font-weight: 700;
}

a {
    text-decoration: none;
    color: inherit;
}

body {
  font-family: 'Roboto', sans-serif;
  background-color: ${(props) => props?.theme?.colors?.third_color};
  color: ${(props) => props?.theme?.colors?.fifth_color};
}

#root {
  display: flex;

  @media (max-width: 630px) {
		flex-direction: column;
	}
}

@keyframes burger-fill-in {
    0% {
        width: 0;
        left: 36px;
    }
    40% {
        width: 0;
        left: 40px;
    }
    80% {
        width: 36px;
        left: -6px;
    }
    100% {
        width: 36px;
        left: 0px;
    }
}

@keyframes burger-fill-out {
    0% {
        width: 36px;
        left: 0px;
    }
    20% {
        width: 42px;
        left: -6px;
    }

    40% {
        width: 0;
        left: 40px;
    }

    100% {
        width: 0;
        left: 36px;
    }
}

@keyframes bun-top-out {
    0% {
        left: 0;
        top: 0;
        transform: rotate(0deg);
    }
    20% {
        left: 0;
        top: 0;
        transform: rotate(15deg);
    }
    80% {
        left: -5px;
        top: 0;
        transform: rotate(-60deg);
    }
    100% {
        left: -5px;
        top: 1px;
        transform: rotate(-45deg);
    }
}

@keyframes bun-bot-out {
    0% {
        left: 0;
        transform: rotate(0deg);
    }
    20% {
        left: 0;
        transform: rotate(-15deg);
    }
    80% {
        left: -5px;
        transform: rotate(60deg);
    }
    100% {
        left: -5px;
        transform: rotate(45deg);
    }
}

@keyframes bun-top-in {
    0% {
        left: -5px;
        bot: 0;
        transform: rotate(-45deg);
    }
    20% {
        left: -5px;
        bot: 0;
        transform: rotate(-60deg);
    }
    80% {
        left: 0;
        bot: 0;
        transform: rotate(15deg);
    }
    100% {
        left: 0;
        bot: 1px;
        transform: rotate(0deg);
    }
}

@keyframes bun-bot-in {
    0% {
        left: -5px;
        transform: rotate(45deg);
    }
    20% {
        left: -5px;
        bot: 0;
        transform: rotate(60deg);
    }
    80% {
        left: 0;
        bot: 0;
        transform: rotate(-15deg);
    }
    100% {
        left: 0;
        transform: rotate(0deg);
    }
}

@keyframes dash-in {
    0% {
        stroke-dashoffset: 240;
    }
    40% {
        stroke-dashoffset: 240;
    }
    100% {
        stroke-dashoffset: 0;
    }
}

@keyframes dash-out {
    0% {
        stroke-dashoffset: 0;
    }
    40% {
        stroke-dashoffset: 240;
    }
    100% {
        stroke-dashoffset: 240;
    }
}

@keyframes rotate-out {
    0% {
        transform: rotate(0deg);
    }
    40% {
        transform: rotate(180deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@keyframes rotate-in {
    0% {
        transform: rotate(360deg);
    }
    40% {
        transform: rotate(180deg);
    }
    100% {
        transform: rotate(0deg);
    }
}
`;
