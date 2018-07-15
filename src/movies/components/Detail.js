import React from 'react';

export class Detail extends React.Component {
    render() {
        return (
            <section className="detail">
                <img
                    className="detail__img"
                    src="https://kinepolis.nl/sites/kinepolis.nl/files/styles/slider_16_9_960/public/stills/Black_Panther_Moviestill05.jpg?itok=kcvLhXlG"
                />

                <header className="detail__header">
                    <h2 className="detail__title">Black Panther</h2>
                    <p className="detail__release">2018</p>
                    <p className="detail__director">Ryan Coogler</p>
                </header>

                <p className="detail__synopsis">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.</p>
            </section>
        )
    }
}

export default Detail;