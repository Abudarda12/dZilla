import { use } from 'react';
import './rolling.css';
import { useState } from 'react';
import { tr } from 'framer-motion/client';

export default function Rolling( ) {
 
  return (
    <div className="rolling">
            <div className="cards" id='cards__first' >
                <img src="src\components\4e7aec138c869cf7080142ddc2d177fddd51ff87.png" alt="card"/>
            </div>
            <div className="cards" id='cards__second'>
                <img src="src\components\066fa853249434708b22386826d9428a011137a1.png" alt="card" />
            </div>
            <div className="cards" id='cards__third'>
                <img src="src\components\942c28854a6e4769be58e8a72986095d4b2fa823.png" alt="card" />
            </div>
            <div className="cards" id='cards__fourth'>
                <img src="src\components\c98f075d84ed07d36899d0e27f8dad2b98270da7.png" alt="card" />
            </div>
    </div>
  );
}