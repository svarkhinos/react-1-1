import ReactDOM from 'react-dom';
import App from './App';

// const data = {
//   id: 'id-1',
//   url: 'https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg',
//   title: 'Feathers. Art abstract',
//   price: 500,
//   author: {
//     tag: 'ractapopulous',
//     url: 'https://pixabay.com/users/ractapopulous-24766/',
//   },
//   quantity: 10,
// };

// const data = paintings[0];

// const painting = (
//   <div>
//     <img src={data.url} alt={data.title} width="480" />
//     <h2>{data.title}</h2>
//     <p>
//       Author: <a href={data.author.url}>{data.author.tag}</a>
//     </p>
//     <p>Price: {data.price} dollars</p>
//     <p>Avaliable: yes or no</p>
//     <button type="button">Add to bin</button>
//   </div>
// );

// ReactDOM.render(painting, document.querySelector('#root'));

ReactDOM.render(
  <App />,

  document.querySelector('#root'),
);
