import { Props } from "./Card";

export const projects: Props[] = [
  {
    message:
      "The goal of this project is to teach a robot to manipulate different soft objects e.g. fold different cloths in simulation and in the real world. The learning algorithm is based on Reinforcement Learning and the perception system uses Computer Vision. The main technologies used include PyTorch, MuJoCo, and ROS.",
    title: "Robotic soft object manipulation",
    mediaType: "image",
    projectLink: "https://github.com/hietalajulius/cloth-manipulation",
    mediaLink:
      "https://github.com/hietalajulius/cloth-manipulation/blob/master/cover.png?raw=true",
    time: "2020 - Present",
    imageFit: "cover",
  },
  {
    message:
      "We used a variant of the Word2vec algorithm to learn word embeddings that were then used in an downstream NLP sentiment analysis task to identify the sentiment in Tweets. The project was done in python and we utlized libraries like gensim and PyTorch for learning the embeddings and the sentiment classifier.",
    title: "Word2vec NLP",
    mediaType: "image",
    projectLink: "https://github.com/hietalajulius/word-2-vec-nlp",
    mediaLink:
      "https://github.com/hietalajulius/word-2-vec-nlp/raw/master/cover.png?raw=true",
    time: "2020",
    imageFit: "cover",
  },
  {
    message:
      "This project utilizes Reinforcement Learning (Policy gradient) to teach an agent to play the game of Pong against an opponent by only observing the pixels from the environment. The pixels were processes using Computer Vision. The main technologies utlized inlude PyTorch and OpenAI Gym.",
    title: "Pong from Pixels",
    mediaType: "image",
    projectLink: "https://github.com/hietalajulius/pong-from-pixels",
    mediaLink:
      "https://camo.githubusercontent.com/8f138ea8c2ed28441393ac3f26a626cf3f8df923591536dcee11002ea93363b4/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f51764670697a736d61583673664b533378372f67697068792e676966",
    time: "2019",
    imageFit: "contain",
  },
  {
    message:
      "This work was done as part of the Junction 2019 hackathon, where we created a tool to recommend recipes to users based on their existing ingredients, preferences, and store availability etc. The recommendation engine is based on a recurrent neural network (RNN) and it was implemented in PyTorch from scratch.",
    title: "Food recipe recommender",
    mediaType: "image",
    projectLink: "https://github.com/hietalajulius/k-ruoka-recipes",
    mediaLink:
      "https://github.com/hietalajulius/k-ruoka-recipes/raw/master/cover.gif?raw=true",
    time: "2019",
    imageFit: "contain",
  },
  {
    message:
      "Done as a part of the Junction Stupid Hack 2019. We created a text classifier that goes through different Wikipedia articles and classifies them as good or bad based on the first couple of sentences. The classifiers is based on a custom recurrent neural network model implemented in PyTorch.",
    title: "NLP text classifier",
    mediaType: "image",
    projectLink: "https://github.com/hietalajulius/stupid-hack-2019",
    mediaLink:
      "https://github.com/hietalajulius/stupid-hack-2019/raw/master/cover.gif",
    time: "2019",
    imageFit: "contain",
  },
];
