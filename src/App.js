import Body from "./components/Body";
import Footer from "./components/Footer";
import Hafsizlik from "./components/Hafsizlik/Hafsizlik";
import Header from "./components/Header";
import Ishchilar from "./components/Ishchilar/Ishchilar";
import Kuzatuv from "./components/Kuzatuv/Kuzatuv";
import Maxsulotlar from "./components/Maxsulotlar/Maxsulotlar";
import Mijoz from "./components/Mijoz/Mijoz";
import Narxlar from "./components/Narxlar/Narxlar";
import SecondPage from "./components/SecondPage/SecondPage";
import TezKunda from "./components/TezKunda/TezKunda";
import TranzAcsiyalar from "./components/TranzAcsiyalar/TranzAcsiyalar";



function App() {
  return (
    <>

      <Header />
      {/* <Body /> */}
      <SecondPage />
      <Maxsulotlar />
      <Kuzatuv />
      <Mijoz />
      <TranzAcsiyalar />
      <Ishchilar />
      <Hafsizlik />
      <Narxlar />
      <TezKunda />
      <Footer />

    </>
  );
}

export default App;
