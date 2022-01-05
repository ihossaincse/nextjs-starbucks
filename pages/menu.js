
import Content from "../components/Content";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";

const menu = [
  {
    cat: "Drinks",
    data: [
      {
        title: "Hot Coffees",
        img: "https://cdn.pixabay.com/photo/2017/01/12/14/22/coffee-1974841_960_720.jpg"
      },
      {
        title: "Hot Teas",
        img: "https://cdn.pixabay.com/photo/2017/03/01/05/12/tea-cup-2107599_960_720.jpg" 
      },
      {
        title: "Hot Drinks",
        img: "https://cdn.pixabay.com/photo/2015/05/25/14/29/tea-783352_960_720.jpg"
      },
      {
        title: "Frappuccino® Blended Beverages",
        img: "https://cdn.pixabay.com/photo/2014/01/16/00/51/ice-cream-246161_960_720.jpg"
      },
      {
        title: "Cold Coffees",
        img: "https://cdn.pixabay.com/photo/2019/01/24/23/57/snow-3953603_960_720.jpg"
      },
      {
        title: "Iced Teas",
        img: "https://cdn.pixabay.com/photo/2018/05/30/23/23/iced-tea-3442812_960_720.jpg"
      },
      {
        title: "Cold Drinks",
        img: "https://cdn.pixabay.com/photo/2016/07/21/11/17/drink-1532300_960_720.jpg"
      }
    ]
  },
  {
    cat: "Food",
    data: [
      {
        title: "Hot Breakfast",
        img: "https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg"
      },
      {
        title: "Bakery",
        img: "https://cdn.pixabay.com/photo/2016/11/29/09/00/doughnuts-1868573_960_720.jpg"
      },
      {
        title: "Lunch",
        img: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg"
      }, 
      {
        title: "Snacks & Sweets",
        img: "https://cdn.pixabay.com/photo/2017/01/16/17/45/pancake-1984716_960_720.jpg"
      },
      {
        title: "Oatmeal & Yogurt",
        img: "https://cdn.pixabay.com/photo/2018/02/27/18/41/muesli-3186256_960_720.jpg"
      }
    ]
  },
  {
    cat: "At Home Coffee",
    data: [
      {
        title: "Whole Bean",
        img: "https://cdn.pixabay.com/photo/2017/09/21/11/45/coffee-2771683_960_720.jpg"
      },
      {
        title: "VIA® Instant",
        img: "https://cdn.pixabay.com/photo/2017/12/17/21/44/coffee-3025022_960_720.jpg"
      }
    ]
  },
  {
    cat: "Merchandise",
    data: [
      {
        title: "Cold Cups",
        img: "https://cdn.pixabay.com/photo/2016/10/20/19/52/tee-1756497_960_720.jpg"
      },
      {
        title: "Tumblers",
        img: "https://cdn.pixabay.com/photo/2018/08/28/20/21/jug-3638398_960_720.jpg"
      },
      {
        title: "Other",
        img: "https://cdn.pixabay.com/photo/2017/03/02/02/59/pine-cones-2110283_960_720.jpg"
      }
    ]
  },
  {
    cat: "Gift Cards",
    data: [
      {
        title: "Happy Birthday",
        img: "https://cdn.pixabay.com/photo/2017/09/04/18/39/coffee-2714970_960_720.jpg"
      },
      {
        title: "Thank You",
        img: "https://cdn.pixabay.com/photo/2018/01/31/09/57/coffee-3120750_960_720.jpg"
      }, 
      {
        title: "Traditional",
        img: "https://cdn.pixabay.com/photo/2015/05/31/12/12/coffee-791439_960_720.jpg"
      }
    ]
  }
];

export default function Menu() {
  return (
    <Layout>
      <div className="flex flex-col justify-between px-4 m-auto md:flex-row max-w-7xl">
        <Sidebar menu={menu} />
        <Content menu={menu} title="Menu" />
      </div>
    </Layout>
  )
}
