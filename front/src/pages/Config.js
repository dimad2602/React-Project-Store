import React from 'react';
import comp from '../assets/OurConfigs/gamePC.jpg';
import {Link} from 'react-router-dom';

const Config = ({src, alt}) => {
//   // Get the modal
  var modal = document.getElementById ('myModal');
//   // Get the button that opens the modal
//   var btn = document.getElementById ('myBtn');
// //   // Get the <span> element that closes the modal
//   var span = document.getElementsByClassName ('close')[0];
//   // When the user clicks on the button, open the modal
  var btnonclick = function () {
    modal.style.display = 'block';
  };
  // When the user clicks on <span> (x), close the modal
  var spanonclick = function () {
    modal.style.display = 'none';
  };
  var refe = 'https://www.citilink.ru/product/processor-amd-s-ryzen-5-5600x-am4-100-000000065-3-7ghz-oem-1773829/?yclid=18326899329026024028&utm_source=yandex&utm_medium=cpc&utm_campaign=cities-srch-cat-dsa_fid_test_tov-cpa&utm_term=&utm_content=%7Cc%3A68713461%7Cg%3A5053919123%7Cb%3A12916150253%7Ck%3A2957253%7Cst%3Asearch%7Ca%3Ano%7Cs%3Anone%7Ct%3Apremium%7Cp%3A1%7Cr%3A2957253%7Cdev%3Adesktop|cgci:0&utm_param1=cpa'
  var mother = 'https://www.citilink.ru/product/materinskaya-plata-msi-mag-b550-tomahawk-max-wifi-soc-am4-amd-b550-4xd-1770722/?utm_medium=cpc&utm_campaign=newcities_obl-srch-cat-nz-all_181&utm_source=yandex&utm_content=|c:78251392|g:5021911707|b:12721879695|k:40997769283|st:search|a:no|s:none|t:premium|p:1|r:40997769283|dev:desktop|cgci:0&utm_param1=all&etext=&yclid=18326990681959630935'
  var video = 'https://www.citilink.ru/product/videokarta-gigabyte-pci-e-4-0-gv-r675xtaorus-e-12gd-amd-rx6750xt-12288-1743757/?etext=2202.aj_OUNyuPj9DKVZMTjLugMME_egkdmlxfmpAibQGbhEnJ3WrZUyonLv6hJEWm1CwaGxzbWpzYnFpdHlmeGZmdg.4c2d34e76af2fb5c263de548360bf27b1a666801&yclid=18327083413424100495&utm_source=yandex&utm_medium=cpc&utm_campaign=cities-srch-cat-dsa_fid_cpa&utm_term=&utm_content=%7Cc%3A81527348%7Cg%3A5100569619%7Cb%3A13227812640%7Ck%3A3251647%7Cst%3Asearch%7Ca%3Ano%7Cs%3Anone%7Ct%3Apremium%7Cp%3A1%7Cr%3A3251647%7Cdev%3Adesktop|cgci:0&utm_param1=all'
  var ram = 'https://www.dns-shop.ru/product/5355ccdf66c33332/operativnaa-pamat-patriot-viper-steel-rgb-pvsr432g360c0k-32-gb/'
  // When the user clicks anywhere outside of the modal, close it
//   var windowonclick = function (event) {
//     if (event.target === modal) {
//       modal.style.display = 'none';
//     }
//   };
  return (
    <main>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={spanonclick}>&times;</span>
          <ul className="v-center">
              <a className='link' href={refe}>Процессор: AMD Ryzen 5600X, OEM</a>
              <a className='link' href={mother}>Материнская плата: MSI MAG B550 TOMAHAWK MAX WIFI</a>
              <a className='link' href={video}>Видеокарта GIGABYTE AMD Radeon RX 6750XT</a>
              <a className='link' href={ram}>Модуль памяти: Patriot Viper Steel RGB PVSR423...</a>
              <li>Устройство охлаждения:</li>
              <li>Память:</li>
              <li>Корпус:</li>
            </ul>
        </div>
      </div>
      <h2 className="title-1">Игровые</h2>
      <div className="othercontainer">
        <Link className="card"   onClick={btnonclick}>
          <img src={comp} alt="Project img" className="card-img" />
          <div className="MIcontainer">
            <h4 className="title-3"><b>Сборка 1</b></h4>
            <ul className="v-center">
              <li>Процессор: AMD Ryzen 5600X, OEM</li>
              <li>Материнская плата: MSI MAG B550 TOMAHAWK MAX WIFI</li>
              <li>Видеокарта GIGABYTE AMD Radeon RX 6750XT</li>
              <li>Модуль памяти: Patriot Viper Steel RGB PVSR423...</li>
              <li>Устройство охлаждения:</li>
              <li>Память:</li>
              <li>Корпус:</li>
            </ul>
          </div>
        </Link>
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
