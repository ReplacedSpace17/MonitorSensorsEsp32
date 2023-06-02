import React, { useEffect, useState } from 'react';
import firebase from '../firebaseConfig';


function TablaFirebase() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const ref = firebase.database().ref('/Sensores'); // Reemplaza 'ruta_de_tu_nodo' con la ruta de tu nodo en Firebase
      const snapshot = await ref.once('value');
      const values = snapshot.val();
      const dataArray = Object.entries(values || {}).map(([key, value]) => ({ id: key, ...value }));
      setData(dataArray);
    };

    fetchData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ph4502c</th>
          <th>hcsr04</th>
          <th>ds18x20</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.ph4502c}</td>
            <td>{item.hcsr04}</td>
            <td>{item.ds18x20}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TablaFirebase;