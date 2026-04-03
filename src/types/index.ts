// src/types/index.ts

type ClientType = 'INDIVIDUAL' | 'BUSINESS';

type ProductType = 'DIGITAL' | 'PHYSICAL';

type OrderStatus = 'PENDING' | 'COMPLETED' | 'CANCELLED';

type PaymentMethod = 'CREDIT_CARD' | 'DEBIT_CARD' | 'PAYPAL';

type WorkerPaymentType = 'HOURLY' | 'SALARY';

type DayStatus = 'WORKING' | 'OFF';

export {
  ClientType,
  ProductType,
  OrderStatus,
  PaymentMethod,
  WorkerPaymentType,
  DayStatus,
};