import React, { Component } from 'react';
import path from 'path';

import './style.css';
import Post from '../Post';

import Enyla from '../../assets/Enyla.jpg';
import Guilherme from '../../assets/Guilherme.jpg';
import Ian from '../../assets/Ian.jpg';
import Rafael from '../../assets/Rafael.jpg';
import Raquel from '../../assets/Raquel.jpg';
import William from '../../assets/william.jpg';
import Ninguem from '../../assets/ninguem.png';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Gui Pizza',
          avatar: Guilherme,
        },
        date: '25 Dez 2019',
        content: 'Beleza, dessa vez eu serei o mestre.',
        comments: [
          {
            id: 1,
            author: {
              name: 'Ian_Dev',
              avatar: Ian,
            },
            content: "Por mim ta suave."
          },
          {
            id: 2,
            author: {
              name: 'Quel_BTS_LOVER',
              avatar: Raquel,
            },
            content: "O que é isso?"
          },
          {
            id: 3,
            author: {
              name: 'Enyla',
              avatar: Enyla,
            },
            content: "Eu não sei jogar."
          },
          {
            id: 4,
            author: {
              name: 'RafaElBigodon',
              avatar: Rafael,
            },
            content: "Eu ensino u.u"
          }
        ],
      },

      {
        id: 2,
        author: {
          name: 'Ninguem, absolutamente Ninguem',
          avatar: Ninguem,
        },
        date: '25 Dez 2019',
        content: 'a',
        comments: [
          {
            id: 1,
            author: {
              name: 'RafaElBigodon',
              avatar: Rafael,
            },
            content: "Vou usar fireball fodasse."
          },
        ]
      },

      {
        id: 3,
        author: {
          name: 'William CEO do mundo',
          avatar: William,
        },
        date: '27 Dez 2019',
        content: 'Iai gatinhas, fundei uma startup la em Cruz, na qual sou o CEO, que vim melhorando com os conhecimentos que aprendi la em Sampa e Floripa hehe ;)',
        comments: [
          {
            id: 1,
            author: {
              name: 'William CEO do mundo',
              avatar: William,
            },
            content: "Me chamem no insta."
          },
          {
            id: 2,
            author: {
              name: 'William CEO do mundo',
              avatar: William,
            },
            content: "@willIAM_imperadordoMundo"
          },
        ]
      },

      {
        id: 4,
        author: {
          name: 'Enyla',
          avatar: Enyla,
        },
        date: '29 Dez 2019',
        content: 'Gente estou vendendo umas TORTILÉÉÉTIIIIIISSSSUHMMMMMAÁÁÁÁ',
        comments: [
          {
            id: 1,
            author: {
              name: 'Quel_BTS_LOVER',
              avatar: Raquel,
            },
            content: "Eu quero 2!"
          },
        ]
      },

      {
        id: 5,
        author: {
          name: 'Gui Pizza',
          avatar: Guilherme,
        },
        date: '10 Jan 2020',
        content: 'Joguem um d20 ai.',
        comments: [
          {
            id: 1,
            author: {
              name: 'Ian_Dev',
              avatar: Ian,
            },
            content: "5"
          },
          {
            id: 2,
            author: {
              name: 'Gui Pizza',
              avatar: Guilherme,
            },
            content: "Ian, você continua dormindo, pela 28ª rodada seguida..."
          },
          {
            id: 3,
            author: {
              name: 'RafaElBigodon',
              avatar: Rafael,
            },
            content: "Tirei 1, a não vei."
          },
          {
            id: 4,
            author: {
              name: 'Gui Pizza',
              avatar: Guilherme,
            },
            content: "É, eu não posso fazer nada, vc morreu kk."
          },
          {
            id: 5,
            author: {
              name: 'Ian_Dev',
              avatar: Ian,
            },
            content: "ahsusuuash"
          },
          {
            id: 6,
            author: {
              name: 'Enyla',
              avatar: Enyla,
            },
            content: "kkkkkkkkk"
          },
        ],
      },
    ]
  };

  render() {
    return (
      <div className="container">
        {this.state.posts.map(post => <Post key={post.id} post={post} />)}
      </div>
    );
  }
}

export default PostList;