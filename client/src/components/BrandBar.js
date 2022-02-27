import React, {useContext} from 'react';
import {Card, Row} from "react-bootstrap";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <Row className="d-flex mt-2">
            {device.brands.map(brand =>
                <Card key={brand.id}
                      className="p-3"
                      style={{cursor:"pointer"}}
                      onClick={() => device.setSelectedBrand(brand)}
                      border={brand.id === device.selectedBrand.id ? "danger" : "light"}
                >
                    {brand.name}
                </Card>
            )

            }
        </Row>
    );
});

export default BrandBar;