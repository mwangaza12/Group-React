import { AiFillDelete } from "react-icons/ai"
import { FiEdit } from "react-icons/fi"

export const Orders = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center text-primary mb-6">My Orders</h1>

      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="table table-zebra w-full">
          <thead className="text-base text-base-content bg-base-200">
            <tr>
              <th>#</th>
              <th>Meal</th>
              <th>Price</th>
              <th>Order Date</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Order Row */}
            {[
              {
                id: 1,
                name: "Seafood Paella",
                note: "Special",
                price: "KSH: 300",
                date: "18/06/2025",
                status: "Completed",
                badge: "badge-success",
                img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90"
              },
              {
                id: 2,
                name: "Seafood Paella",
                note: "Special",
                price: "KSH: 230",
                date: "18/06/2025",
                status: "Canceled",
                badge: "badge-error",
                img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90"
              },
              {
                id: 3,
                name: "Seafood Paella",
                note: "Special",
                price: "KSH: 500",
                date: "18/06/2025",
                status: "Pending",
                badge: "badge-warning",
                img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90"
              },
            ].map((order, i) => (
              <tr key={order.id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center gap-4">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={order.img} alt={order.name} />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold">{order.name}</div>
                      <div className="text-sm text-gray-500">{order.note}</div>
                    </div>
                  </div>
                </td>
                <td className="font-medium">{order.price}</td>
                <td>{order.date}</td>
                <td>
                  <span className={`badge badge-outline ${order.badge}`}>
                    {order.status}
                  </span>
                </td>
                <td>
                  <div className="flex justify-center gap-2">
                    {order.status === "Pending" ? (
                      <button className="btn btn-sm btn-outline text-blue-600 hover:text-blue-400">
                        <FiEdit />
                      </button>
                    ) : (
                      <button className="btn btn-sm btn-outline text-red-600 hover:text-white hover:bg-red-600">
                        <AiFillDelete />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
