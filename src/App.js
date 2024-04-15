// import DarkMode from "./components/DarkMode";
import Cart from "./components/Cart";
import Search from "./components/Search";
import UseEffect1 from "./components/UseEffect1";
import UseEffect2 from "./components/UseEffect2";
import UseEffect3 from "./components/UseEffect3";

{/*note bài học: có 3 trường hợp useEffect:
1: kg truyên dependecy: render xong thì gọi lại hoài lun(call back)
2: dependecy là array empty: render xong thì gọi lại 1 lần duy nhất(call back)
3:
*/}

function App() {
  return (
    <>
      {/* <DarkMode /> */}

      {/* <Cart /> */}

      {/* <Search /> */}

      {/* <UseEffect1 /> */}

      {/* <UseEffect2 /> */}

      <UseEffect3 />
    </>
  );
}

export default App;
