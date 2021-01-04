import React, { Fragment } from "react";
import { CardItem, CardState } from "../../interface/common/CardState";
import { Card } from 'primereact/card';
import log from "../../configurations/LogLevel";
import { TEXT_FIELD } from "../../assets/resources/Card/CardField";






const CardComponent = (props: any) => {
    
    const renderCard = (card: CardState) => {

        let title = (card.title_pos==="top" && card.title) ? card.title : null
        let subtitle = (card.title_pos==="top" && card.subtitle) ? card.subtitle : ""
        
        let header = null
        let footer = null

        if (card.title_pos === "bottom")
          footer = (<div className="card-title">{card.title}</div>)  
        
        if(card.header)
            header = (<img src={card.header.path} />)       

        return (
            <div className={`${card.col} bordered-card`}>
                <div>
                    <a href={card.link}><Card title={title} subTitle={subtitle} className="ui-card-shadow m-card" footer={footer} header={header} >
                          { card.content && <p>{card.content.text}</p> }
                    </Card></a>
                </div>
            </div>
        )
    }
    
    return (
        <Fragment>
                {           
                    props.json.map((card: CardState) => {
                        return renderCard(card)
                    })
                }
        </Fragment>
    )
}

export default CardComponent;