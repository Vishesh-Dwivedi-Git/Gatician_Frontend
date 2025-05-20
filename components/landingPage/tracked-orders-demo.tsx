"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Package, CheckCircle, Clock, Truck } from "lucide-react";

interface OrderItem {
  id: number;
  name: string;
  price: string;
  quantity: number;
}

interface Order {
  id: string;
  customer: string;
  date: string;
  status: string;
  items: OrderItem[];
  total: string;
}

interface DemoSectionProps {
  title?: string;
  subtitle?: string;
  initialOrders?: Order[];
}

export function TrackedOrdersDemo({
  title = "See GATICIAN in Action",
  subtitle = "Watch how easy it is to monitor your orders and manage your retail business",
  initialOrders = [],
}: DemoSectionProps) {
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);

  useEffect(() => {
    if (orders.length === 0) {
      const demoOrders = generateDemoOrders();
      setOrders(demoOrders);
      setSelectedOrderId(demoOrders[0]?.id || null);
    }
  }, []);

  const selectedOrder = orders.find((order) => order.id === selectedOrderId) || orders[0];

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 text-white">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="border border-gray-800 rounded-xl overflow-hidden">
          <div className="p-4 bg-gray-800 flex items-center border-b border-gray-700">
            <div className="flex space-x-2 mr-4">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-gray-300 text-xs sm:text-sm">
              ondc-dashboard.gatician.com
            </div>
          </div>

          <div className="p-4 sm:p-6 bg-black">
            <OrderDashboard
              orders={orders}
              selectedOrder={selectedOrder}
              onSelectOrder={setSelectedOrderId}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function OrderDashboard({
  orders,
  selectedOrder,
  onSelectOrder,
}: {
  orders: Order[];
  selectedOrder?: Order;
  onSelectOrder: (id: string) => void;
}) {
  const getStatusIcon = (status: string) => {
    const baseClass = "h-4 w-4";
    switch (status) {
      case "Processing":
        return <Clock className={`${baseClass} text-blue-400`} />;
      case "Shipped":
        return <Package className={`${baseClass} text-yellow-400`} />;
      case "Out for Delivery":
        return <Truck className={`${baseClass} text-orange-400`} />;
      case "Delivered":
        return <CheckCircle className={`${baseClass} text-green-400`} />;
      default:
        return <div className={`${baseClass} bg-gray-500 rounded-full`} />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
      {/* Order List */}
      <div className="md:col-span-1">
        <h3 className="text-xs sm:text-sm font-medium text-gray-400 mb-3 uppercase tracking-wider">
          Recent Orders
        </h3>
        <div className="space-y-2">
          <AnimatePresence>
            {orders.map((order) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                onClick={() => onSelectOrder(order.id)}
                className={`p-3 rounded-lg cursor-pointer text-xs sm:text-sm transition-colors ${
                  selectedOrder?.id === order.id
                    ? "bg-yellow-500 text-black"
                    : "bg-gray-900 hover:bg-gray-800"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium truncate">{order.id}</span>
                  {getStatusIcon(order.status)}
                </div>
                <div className="text-xs opacity-80 truncate">{order.customer}</div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Order Details */}
      {selectedOrder && (
        <div className="md:col-span-3 mt-6 md:mt-0">
          <div className="bg-gray-900 rounded-lg p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6">
              <div>
                <h3 className="text-lg sm:text-xl font-light mb-1">{selectedOrder.id}</h3>
                <p className="text-xs sm:text-sm text-gray-400">Placed on {selectedOrder.date}</p>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800 text-xs sm:text-sm mt-2 sm:mt-0">
                {getStatusIcon(selectedOrder.status)}
                <span>{selectedOrder.status}</span>
              </div>
            </div>

            <div className="mb-4 sm:mb-6">
              <h4 className="text-xs sm:text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">
                Customer
              </h4>
              <p className="text-sm sm:text-base">{selectedOrder.customer}</p>
            </div>

            <div className="mb-6 sm:mb-8">
              <h4 className="text-xs sm:text-sm font-medium text-gray-400 mb-2 sm:mb-3 uppercase tracking-wider">
                Items
              </h4>
              <div className="space-y-3">
                {selectedOrder.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center py-2 border-b border-gray-800"
                  >
                    <div>
                      <div className="font-medium text-sm sm:text-base">{item.name}</div>
                      <div className="text-xs text-gray-400">Qty: {item.quantity}</div>
                    </div>
                    <div className="font-medium text-sm sm:text-base">{item.price}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center border-t border-gray-800 pt-4">
              <div className="font-medium text-sm sm:text-base">Total Amount</div>
              <div className="text-lg sm:text-xl font-light">{selectedOrder.total}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function generateDemoOrders(): Order[] {
  const customers = ["Rahul Sharma", "Ananya Patel", "Vikram Kumar", "Priya Singh", "Amit Verma"];
  const statuses = ["Processing", "Shipped", "Out for Delivery", "Delivered"];
  const items = [
    { id: 1, name: "Smartphone", price: "₹12,999", quantity: 1 },
    { id: 2, name: "Wireless Earbuds", price: "₹1,499", quantity: 1 },
    { id: 3, name: "Laptop", price: "₹45,999", quantity: 1 },
  ];

  return Array.from({ length: 5 }, (_, i) => {
    const randomItems = items.slice(0, Math.floor(Math.random() * 2) + 1);
    const total = randomItems
      .reduce((sum, item) => sum + parseInt(item.price.replace(/\D/g, ""), 10), 0)
      .toLocaleString("en-IN");

    return {
      id: `ONDC-${1000 + i}`,
      customer: customers[i % customers.length],
      date: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toLocaleDateString(
        "en-IN",
      ),
      status: statuses[Math.floor(Math.random() * statuses.length)],
      items: randomItems,
      total: `₹${total}`,
    };
  });
}