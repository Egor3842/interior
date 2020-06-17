import React from 'react'
import s from './InfoAbout.module.css'

const InfoAbout = (props) => {
    return (
        <div className = {s.container}>
            <div className ={s.getBack}>
            <div className = {s.arrow} onClick = {()=>{props.setInfoAbout(false)}}></div>
            <div className = {s.back} onClick = {()=>{props.setInfoAbout(false)}} >
            Вернуться </div>
              </div>
        <div className = {s.InfoText}>
      <div className = {s.Text}>
"Casual" - это свободный и динамичный стиль, причем он используется не только в одежде, но в интерьере.<br/>
На рабочем месте это правильное распределение пространства, удобная деревянная мебель, натуральные ткани,<br/>
а дома, в вашей квартире — это, в первую очередь, удобство и уют и много свободного пространства.<br/><br/>
Простым решением для вашей прихожей может быть система крючков, установленных на деревянной плите <br/>
или натянутая сетка, на которую можно вешать все, что угодно обувь за каблуки, сумки, зонты, пакеты, одежду.<br/>
Причем, даже дети спокойно справятся с этой задачей сами, если крючки или сетку разместить до самого пола.<br/><br/>
Кухия в стиле "casual"- это, конечно, дерево. Хотя подойдет и пластик, если вы дополните интерьер<br/>
клетчатыми, полосатыми, в горошек или в цветочек шторами и скатертью. Можно украсить по вашему<br/>
разумению множеством разноцветных деталей: кружечек, баночек, плошек. Только не переусердствуйте, ведь<br/>
"casual", прежде всего свобода, простор, а не помещение плотно забитое вещами.<br/>
        </div>
        </div>
        </div>
    )
}

export default InfoAbout