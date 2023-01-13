import React from 'react';
import comp from '../assets/OurConfigs/gamePC.jpg';

const Config = ({src, alt}) => {
  return (
    <main>
        <h2 className="title-1">Игровые</h2>
      <div className="othercontainer">
        <div className="card">
            <img src={comp} alt="Project img" className="card-img" />
          <div className="MIcontainer">
            <h4 className="title-3"><b>Сборка 1</b></h4>
            <p>
              <ul>
                <li>Видеокарта 1</li>
                <li>Процессор 1</li>
                <li>Материнка 1</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="card">
            <img src={comp} alt="Project img" className="card-img" />
          <div className="MIcontainer">
            <h4 className="title-3"><b>Сборка 2</b></h4>
            <p>
              <ul>
                <li>Видеокарта 2</li>
                <li>Процессор 2</li>
                <li>Материнка 2</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="card">
            <img src={comp} alt="Project img" className="card-img" />
          <div className="MIcontainer">
            <h4 className="title-3"><b>Сборка 3</b></h4>
            <p>
              <ul>
                <li>Видеокарта 3</li>
                <li>Процессор 3</li>
                <li>Материнка 3</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="card">
            <img src={comp} alt="Project img" className="card-img" />
          <div className="MIcontainer">
            <h4 className="title-3"><b>Сборка 3</b></h4>
            <p>
              <ul>
                <li>Видеокарта 4</li>
                <li>Процессор 4</li>
                <li>Материнка 4</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Config;

// <div class="container">
// 		<div class="card">
// 			<div class="card-body">
// 				<h4 class="card-title">{{recipe.name}}</h4>
// 				<img src="{{recipe.pic.url}}" class="card-img-top" style="width:200px!important" alt="...">
// 				<p class="card-text"></p>
// 				<h6 class="card-subtitle mb-2 text-muted">
// 					Автор:
// 					<a href="/user/{{recipe.author.id}}">{{recipe.author}}</a>
// 				</h6>
// 				<h6 class="card-subtitle mb-2 text-muted">{{recipe.dishType}}</h6>
// 				<h5 class="card-text">Ингредиенты:</h5>
// 				<p class="card-text">{{recipe.ingredients|linebreaksbr}}</p>
// 				<h5 class="card-text">Инструкции:</h5>
// 				<p class="card-text">{{recipe.instuctions}}</p>
// 				<div class="flexshit right">
// 					{% if user.id == recipe.author.id %}
// 					<a href='edit' class="btn btn-primary">Изменить</a> <a href='remove' class="btn btn-danger">Удалить</a>
// 					{% endif %}
// 				</div>
// 			</div>
// 		</div>
// 	</div>
