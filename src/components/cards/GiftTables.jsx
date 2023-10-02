import React from 'react'

function GiftTables({ gift_tables, class_Id }) {
    console.log(gift_tables)
    return (
        <section className={`gift-tables-section gift-tables-section-${class_Id}`}>
            <h3 className={`gift-tables-title`}>Tu Presencia es el Mejor Regalo, pero si Deseas Hacer Más Especial Nuestro Día...</h3>
            <p className='gift-table-subtitle'>Si quieres tener un detalle con nosotros, checa nuestras mesas de regalos.</p>
            <div className="gift-tables-container">
                {gift_tables.map((table, key) => (
                    <div key={key} className={`card-table table-${table.name} table-${table.name}-${class_Id}`}>
                        {tables(table.name, table.link)}
                    </div>
                ))}
            </div>

        </section>

    )
}

function tables(table, link) {
    switch (table) {
        case 'amazon':
            return (
                <div className='card-table-gift card-table-gift-amazon'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" alt="Amazon logo" />
                   <br />
                   <a className='btn-gift-table btn-gift-table-amazon' href={link}>ver mesa de regalos</a>
                </div>
            )


        case 'liverpool':
            return (
                <div className='card-table-gift card-table-gift-liverpool'>
                    <img src="https://s3.eu-west-1.amazonaws.com/cdn.spydeals.nl/images/uploads/h2rbqKj3X7SYdcIr4d86eMhLJmv4EgOAtJrHdcr3.png" alt="Liverpool logo" />
                    <br />
                    <a className='btn-gift-table btn-gift-table-liverpool' href={link}>ver mesa de regalos</a>
                </div>
            )
        default:
            break;
    }
}

export default GiftTables