import Banner from "../components/Banner"
import Info from "../components/Info"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <Banner 
        title="STARBUCKS FOR LIFE" 
        text="It's the most festive game of the year, with chances to win free coffee and more.*" 
        btnText="Play now"
        img="/images/137-75689.png"
        directionClass=""
        colorClass=""
        btnClass="text-2xl text-green-700 underline border-transparent border-0"
        bgClass="bg-sky-100"
      />
      <Banner 
        title="FEELING FESTIVE" 
        text="‘Tis the season for a handcrafted favorite, like our Toasted White Chocolate Mocha." 
        btnText="Order Now"
        img="/images/137-75921.png"
        directionClass="flex-row-reverse"
        colorClass="text-white"
        btnClass="text-white border-white hover:bg-white/30 mt-10 inline-block"
        bgClass="bg-rose-600"
      />
      <Banner 
        title="CHILL AND BE MERRY" 
        text="Our Irish Cream Cold Brew is dressed up for the holidays with sweet cream cold foam and a strike of cocoa." 
        btnText="Order Now"
        img="/images/137-75419.jpg"
        directionClass=""
        colorClass="text-white"
        btnClass="text-white border-white hover:bg-white/30 mt-10 inline-block"
        bgClass="bg-rose-600"
      />
      <Banner 
        title="MERRY MOMENT" 
        text="Treat yourself to a festive Sugar Plum Cheese Danish with a nicely spiced sugar-plum spread." 
        btnText="Order Now"
        img="/images/137-75241.webp"
        directionClass=""
        colorClass="text-white"
        btnClass="text-white border-white hover:bg-white/30 mt-10 inline-block"
        bgClass="bg-rose-600"
      />
      <Banner 
        title="You voted, we gave" 
        text="Thanks to you, The Starbucks Foundation just donated $1 million to help strengthen communities. See the results and learn more about the impact." 
        btnText="Order Now"
        img="/images/137-75859.jpg"
        directionClass="flex-row-reverse"
        colorClass="text-white"
        btnClass="text-white border-white hover:bg-white/30 mt-10 inline-block"
        bgClass="bg-rose-600"
      />
      <Banner 
        title="Earning 4,500 Bonus Stars is Super Starifying" 
        text="Earn more Stars and even more Rewards with a $0 intro annual fee for your first year with the Starbucks® Rewards Visa® Card. Plus your Stars won’t expire – an exclusive Starbucks benefit for cardmembers. Now that’s Super Starifying." 
        btnText="Learn More"
        img="/images/137-75418.webp"
        directionClass=""
        colorClass=""
        btnClass="border-black hover:bg-white/30"
        bgClass="bg-sky-100"
      />
      <Info 
        text="*NO PURCHASE NECESSARY. Participating stores only. Starbucks employees are not eligible to win prizes. Ends 1/3/22. To play and for Official Rules, visit starbucksforlife.com. Entrants can receive a maximum of 2 plays per day, plus bonus opportunities to earn additional plays." 
      />
    </Layout>
  )
}
