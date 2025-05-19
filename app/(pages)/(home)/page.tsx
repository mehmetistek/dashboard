import InfoCard from "./InfoCard";
import icon1 from "@/assets/images/icon-1.png";
import icon2 from "@/assets/images/icon-2.png";
import icon3 from "@/assets/images/icon-3.png";
import SalesGraph from "./SalesGraph";
import { Suspense } from "react";
import GraphLoader from "@/components/loaders/GraphLoader";
import Title from "@/components/title";
import { getValues } from "@/utils/api";

const Home = async() => {
 const data =  await getValues();
 //ekrana basılacak olan kart bileşenşerine gönderilecek olan propları hazırla
 const cards = [{
  icon:icon1,
  label:"Toplam Kullanıcı",
  value:data.totalUser,
 },
 {
  icon:icon2,
  label:"Toplam Sipariş",
  value:data.totalOrder,
 },
 {
  icon:icon3,
  label:"Toplam Satış",
  value:data.totalIncome,
 },
 {
  icon:icon2,
  label:"Ürün Sayısı",
  value:data.productsCount,
 }
]
  return (
    <div>
      <Title>Dashboard</Title>

      <section className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        {cards.map((i) => (
          <InfoCard icon={i.icon} label={i.label} value={i.value}/>
        ))}
        <InfoCard  icon={icon1} label="Toplam Kullanıcı" value={5435345}/>
        <InfoCard icon={icon2} label="Toplam Sipariş" value={53535} />
        <InfoCard icon={icon3}  label="Toplam Satış" value={234234}/>
        <InfoCard  icon={icon1} label="Toplam Kullanıcı" value={5435345}/>
      </section>

<Suspense fallback={<GraphLoader/>} >
      <SalesGraph />
</Suspense>
    </div>
  )
}

export default Home;