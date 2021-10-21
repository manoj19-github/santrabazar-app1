import "./_App.css"
import Product from "./components/Product"
import {data} from "./data"
function App() {
  return (
    <div class="grid-container">
      <header class="row">
        <div class="">
          <a href="index.html" className="title" style={{fontSize:"1.4rem"}}
          >santra bazar</a>
        </div>

          <div class="btn-class">
            <a href="cart.html" class="cart-btn">cart</a>
            <a href="signin.html" class="signin-btn">signin</a>
          </div>
      </header>
      <main>
        <div class="row center">
          {
            data.products.map((product,index)=>{
              return(
                <Product key={index} product={product}/>
              )

            })
          }
      </div>
    </main>
      <footer class="row center">
        All rights reserv
      </footer>

    </div>

  );
}

export default App;
