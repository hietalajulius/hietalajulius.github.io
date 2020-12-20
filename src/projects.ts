import { Props } from "./Card";

export type ProjectType = Props & { gridArea: string };

export const projects: ProjectType[] = [
  {
    gridArea: "proj1",
    message:
      "The goal of this project is to teach a robot to manipulate different soft objects e.g. fold different cloths in simulation and in the real world. The learning algorithm is based on Reinforcement Learning and the perception system uses Computer Vision. The main technologies used include PyTorch, MuJoCo, and ROS.",
    title: "Robotic soft object manipulation",
    mediaType: "image",
    projectLink: "https://github.com/hietalajulius/cloth-manipulation",
    mediaLink:
      "https://github.com/hietalajulius/cloth-manipulation/blob/master/cover.png?raw=true",
    time: "2020",
    imageFit: "cover",
  },
  {
    gridArea: "proj2",
    message:
      "In this work, we used a variant of the Word2vec algorithm to learn word embeddings that were then used in an downstream NLP sentiment analysis task to identify the sentiment exppressed in Twitter tweets. The project was done in python and we utlized libraries like gensim and PyTorch for learning the embeddings and the sentiment classifier.",
    title: "Word2vec NLP",
    mediaType: "image",
    projectLink: "https://github.com/hietalajulius/word-2-vec-nlp",
    mediaLink:
      "https://github.com/hietalajulius/word-2-vec-nlp/raw/master/cover.png?raw=true",
    time: "2020",
    imageFit: "cover",
  },
  {
    gridArea: "proj3",
    message: "This project utilizes Reinforcement Learning (Policy gradient) to teach an agent to play the game of Pong against an opponent by only observing the pixels from the environment. The pixels were processes using Computer Vision. The main technologies utlized inlude PyTorch and OpenAI Gym.",
    title: "Pong from Pixels",
    mediaType: "image",
    projectLink: "https://github.com/hietalajulius/pong-from-pixels",
    mediaLink:
      "https://camo.githubusercontent.com/8f138ea8c2ed28441393ac3f26a626cf3f8df923591536dcee11002ea93363b4/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f51764670697a736d61583673664b533378372f67697068792e676966",
    time: "2019",
    imageFit: "contain",
  },
];
