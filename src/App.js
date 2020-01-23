import React from 'react'
import Market from './components/market/Market'

export default function App() {
    const offers= [
        {id: 1,imgUrl: 'https://avatars.mds.yandex.net/get-mpic/1926093/img_id8929824454640850899.jpeg/6hq', price: 992, title: 'Ирригатор B.Well WI-911', link:'https://market.yandex.ru/product--irrigator-b-well-wi-911/12764174?show-uid=15797898896930527080116003&nid=54921&context=search'},
        {id: 2 ,imgUrl: 'https://avatars.mds.yandex.net/get-mpic/1545401/img_id8012300520411194688.png/6hq', price: 350, title: 'Расческа для бороды Borodist кленовая', link:'https://market.yandex.ru/product--rascheska-dlia-borody-borodist-klenovaia/560195061?show-uid=15797902695731753909316001&nid=16736310&context=search'},
        {id: 3,imgUrl: 'https://avatars.mds.yandex.net/get-mpic/2017233/img_id2876123970420993573.jpeg/6hq', price: 2689, title: 'Ирригатор Revyline RL210', link:'https://market.yandex.ru/product--irrigator-revyline-rl210/422230024?show-uid=15797898896930527080116008&nid=54921&context=search'},
        {id: 4,imgUrl: 'https://avatars.mds.yandex.net/get-mpic/1331400/img_id697080261907560948.jpeg/9hq', price: 6750, title: 'Электромеханический конструктор LEGO City 60197', link:'https://market.yandex.ru/product--elektromekhanicheskii-konstruktor-lego-city-60197-passazhirskii-poezd/115604141?show-uid=15797898169400119799416003&nid=59749&track=brandpage_free_items_popular_snippet'}

    ]
    return (
        <div className="root__offer">
            <Market id={offers[0].id} imgUrl={offers[0].imgUrl} price={offers[0].price} title={offers[0].title}  link={offers[0].link}/>
            <Market id={offers[1].id} imgUrl={offers[1].imgUrl} price={offers[1].price} title={offers[1].title}  link={offers[1].link}/>
            <Market id={offers[2].id} imgUrl={offers[2].imgUrl} price={offers[2].price} title={offers[2].title}  link={offers[2].link}/>
            <Market id={offers[3].id} imgUrl={offers[3].imgUrl} price={offers[3].price} title={offers[3].title}  link={offers[3].link}/>
        </div>
    )
}
