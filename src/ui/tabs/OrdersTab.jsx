import "./tabs.scss";

export default function OrdersTab() {
  return (
    <div className="tab__container">
      <h3>Order Detials</h3>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Payment Id</th>
              <th>image</th>
              <th>title</th>
              <th>price</th>
              <th>category</th>
              <th>name</th>
              <th>address</th>
              <th>pincode</th>
              <th>ph no.</th>
              <th>email</th>
              <th>date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>33333</td>
              <td>
                <img
                  src="https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg"
                  alt=""
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
