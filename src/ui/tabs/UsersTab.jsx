import "./tabs.scss";

export default function UsersTab() {
  return (
    <div className="tab__container">
      <h3>Users Details</h3>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>name</th>
            <th>address</th>
            <th>pincode</th>
            <th>ph no.</th>
            <th>email</th>
            <th>date</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
