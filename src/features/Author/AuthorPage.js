import React from "react";
import Section from "../../common/Section";
import { Article, Header } from "./styled";



export default () => (
<div>
    <Header>O autorze</Header>
    <Section
    title="O mnie"
    body={(
       <Article>
        <p>
            <strong>Cześć</strong>! W wolnych chwilach lubię długie spacery po lesie, parku, 
            bardzo lubię też wyprawy do muzeów, choć ostatnio nie mam za wiele wolnego czasu.
            Jeśli chodzi o sport, moim ulubionym jest pływanie, kiedyś też zrobiłam kurs nurkowania.
            Prywatnie jestem właścicielką pięknego i bardzo energicznego kotka.
        </p>
        <p>
            Zdecydowałam się na ten kurs, ponieważ szukałam nowych umiejętności. Nauka programowania
            była dla mnie trudna, ale w tej chwili mam <em>nieukrywaną przyjemność</em> zaprezentować wynik moich
            starań. Obecnie staram się poświęcić wiecej czasu na rozwijanie moich możliwości.
        </p>
       </Article>
)}
    />
</div>
);