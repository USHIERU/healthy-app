import React from 'react';

import Card from '../Card';
import PersonCard from './PersonCard';

export default function PacientesQuickview(props) {

    const Extras = () => <button type="submit" className="waves-effect waves-light btn right green accent-4 grey-text text-lighten-5">Nuevo</button>;

    return <>
        <Card title="Pacientes" extras={<Extras />}>
            <div className="row">
                <div className="col s12">
                    <PersonCard name="Amabelle	Helian" img="https://thispersondoesnotexist.com/image" />
                    <PersonCard name="Elbertine	Cranney" img="https://thispersondoesnotexist.com/image" />
                    <PersonCard name="Amabelle	Helian" img="https://thispersondoesnotexist.com/image" />
                    <PersonCard name="Elbertine	Cranney" img="https://thispersondoesnotexist.com/image" />
                </div>
            </div>
        </Card>
    </>;
}