export interface SpotAccountBalance {
  id: string;
  currency: string;
  type: string;
  balance: string;
  available: string;
  holds: string;
}

export interface AccountSummaryResponse {
  level: number;
  subQuantity: number;
  maxDefaultSubQuantity: number;
  maxSubQuantity: number;
  spotSubQuantity: number;
  marginSubQuantity: number;
  futuresSubQuantity: number;
  maxSpotSubQuantity: number;
  maxMarginSubQuantity: number;
  maxFuturesSubQuantity: number;
}

export interface BalancesResponse {
  id: string;
  currency: string;
  type: 'main' | 'trade' | 'trade_hf' | 'margin';
  balance: string;
  available: string;
  holds: string;
}

export interface AccountResponse {
  currency: string;
  balance: string;
  available: string;
  holds: string;
}

export interface AccountTransactionsResponse {
  currentPage: number;
  pageSize: number;
  totalNum: number;
  totalPage: number;
  items: {
    id: string;
    currency: string;
    amount: string;
    fee: string;
    balance: string;
    accountType: 'MAIN' | 'TRADE' | 'MARGIN' | 'CONTRACT';
    bizType: string;
    direction: 'in' | 'out';
    createdAt: number;
    context: string;
  }[];
}

export interface AccountHFTransactionsResponse {
  id: string;
  currency: string;
  amount: string;
  fee: string;
  balance: string;
  accountType: 'TRADE_HF';
  bizType: 'TRANSFER' | 'TRADE_EXCHANGE';
  direction: 'out' | 'in';
  createdAt: string;
  context: string;
}

export interface AccountHFMarginTransactionsResponse {
  id: string;
  currency: string;
  amount: string;
  fee: string;
  balance: string;
  accountType: 'MARGIN_V2' | 'ISOLATED_V2';
  bizType:
    | 'TRANSFER'
    | 'MARGIN_EXCHANGE'
    | 'ISOLATED_EXCHANGE'
    | 'LIQUIDATION'
    | 'ASSERT_RETURN';
  direction: 'out' | 'in';
  createdAt: string;
  context: string;
}

/**
 *
 * Sub-Account
 *
 */

export interface SubAccountInfo {
  userId: string;
  uid: string | number;
  subName: string;
  type: number;
  remarks: string | null;
  access: string;
  status?: number;
  createdAt?: number;
}

export interface SubAccountBalance {
  currency: string;
  balance: string;
  available: string;
  holds: string;
  baseCurrency: string;
  baseCurrencyPrice: string;
  baseAmount: string;
}

export interface GetSubAccountsV2Response {
  currentPage: number;
  pageSize: number;
  totalNum: number;
  totalPage: number;
  items: SubAccountInfo[];
}

export interface CreateSubAccountResponse {
  uid: number;
  subName: string;
  remarks: string;
  access: string;
}

export interface GetSubAccountBalanceResponse {
  subUserId: string;
  subName: string;
  mainAccounts: SubAccountBalance[];
  tradeAccounts: SubAccountBalance[];
  marginAccounts: SubAccountBalance[];
}

export interface GetSubAccountBalancesV2Response {
  currentPage: number;
  pageSize: number;
  totalNum: number;
  totalPage: number;
  items: {
    subUserId: string;
    subName: string;
    mainAccounts: SubAccountBalance[];
  }[];
}

/**
 *
 * Sub-Account API
 *
 *
 */

export interface SubAccountAPIInfo {
  apiKey: string;
  createdAt: number;
  ipWhitelist: string;
  permission: string;
  remark: string;
  subName: string;
}

export interface CreateSubAccountAPIResponse extends SubAccountAPIInfo {
  apiSecret: string;
  passphrase: string;
}

export interface UpdateSubAccountAPIResponse {
  apiKey: string;
  ipWhitelist: string;
  permission: string;
  subName: string;
}

export interface DeleteSubAccountAPIResponse {
  subName: string;
  apiKey: string;
}

/**
 *
 ***********
 * Funding
 ***********
 *
 */

export interface MarginAccountBalance {
  currency: string;
  totalBalance: string;
  availableBalance: string;
  holdBalance: string;
  liability: string;
  maxBorrowSize: string;
}

export interface MarginAssetDetail {
  currency: string;
  borrowEnabled: boolean;
  repayEnabled: boolean;
  transferEnabled: boolean;
  borrowed: string;
  totalAsset: string;
  available: string;
  hold: string;
  maxBorrowSize: string;
}

export interface MarginAccountDetail {
  totalLiabilityOfQuoteCurrency: string;
  totalAssetOfQuoteCurrency: string;
  debtRatio: string;
  status: 'EFFECTIVE' | 'BANKRUPTCY' | 'LIQUIDATION' | 'REPAY' | 'BORROW';
  assets: MarginAssetDetail[];
}

export interface IsolatedMarginAssetDetail {
  symbol: string;
  debtRatio: string;
  status: 'EFFECTIVE' | 'BANKRUPTCY' | 'LIQUIDATION' | 'REPAY' | 'BORROW';
  baseAsset: MarginAssetDetail;
  quoteAsset: MarginAssetDetail;
}

export interface GetMarginAccountBalancesResponse {
  debtRatio: string;
  accounts: MarginAccountBalance[];
}

export interface GetMarginAccountBalanceDetailResponse {
  timestamp: number;
  currentPage: number;
  pageSize: number;
  totalNum: number;
  totalPage: number;
  items: MarginAccountDetail[];
}

export interface IsolatedMarginAccountDetailResponse {
  totalAssetOfQuoteCurrency: string;
  totalLiabilityOfQuoteCurrency: string;
  timestamp: number;
  assets: IsolatedMarginAssetDetail[];
}

/**
 *
 * Deposit
 *
 */

export interface DepositAddress {
  address: string;
  memo: string;
  chain: string;
}

export interface DepositAddressV2 extends DepositAddress {
  contractAddress: string;
}

export interface DepositItem {
  address: string;
  memo: string;
  amount: string;
  fee: string;
  currency: string;
  chain: string;
  isInner: boolean;
  walletTxId: string;
  status: 'PROCESSING' | 'SUCCESS' | 'FAILURE';
  remark: string;
  createdAt: number;
  updatedAt: number;
}

export interface HistoricalDepositItem {
  currency: string;
  createAt: number;
  amount: string;
  walletTxId: string;
  isInner: boolean;
  status: 'PROCESSING' | 'SUCCESS' | 'FAILURE';
}

export interface GetDepositListResponse {
  currentPage: number;
  pageSize: number;
  totalNum: number;
  totalPage: number;
  items: DepositItem[];
}

export interface GetV1HistoricalDepositsListResponse {
  currentPage: number;
  pageSize: number;
  totalNum: number;
  totalPage: number;
  items: HistoricalDepositItem[];
}

/**
 *
 * Withdrawals
 *
 */

// ResponseTypes.ts

interface WithdrawalItem {
  id: string;
  address: string;
  memo: string;
  currency: string;
  chain: string;
  amount: string;
  fee: string;
  walletTxId: string;
  isInner: boolean;
  status: 'PROCESSING' | 'WALLET_PROCESSING' | 'SUCCESS' | 'FAILURE';
  remark: string;
  createdAt: number;
  updatedAt: number;
}

interface HistoricalWithdrawalItem {
  currency: string;
  createAt: number;
  amount: string;
  address: string;
  walletTxId: string;
  isInner: boolean;
  status: 'PROCESSING' | 'SUCCESS' | 'FAILURE';
}

export interface GetWithdrawalsListResponse {
  currentPage: number;
  pageSize: number;
  totalNum: number;
  totalPage: number;
  items: WithdrawalItem[];
}

export interface GetV1HistoricalWithdrawalsListResponse {
  currentPage: number;
  pageSize: number;
  totalNum: number;
  totalPage: number;
  items: HistoricalWithdrawalItem[];
}

export interface GetWithdrawalQuotasResponse {
  limitBTCAmount: string;
  quotaCurrency: string;
  chain: string;
  remainAmount: string;
  innerWithdrawMinFee: string;
  usedBTCAmount: string;
  limitQuotaCurrencyAmount: string;
  withdrawMinSize: string;
  withdrawMinFee: string;
  precision: number;
  reason: string | null;
  usedQuotaCurrencyAmount: string;
  currency: string;
  availableAmount: string;
  isWithdrawEnabled: boolean;
}

/**
 *
 * Transfer
 *
 */

export interface TransferableResponse {
  currency: string; // Currency
  balance: string; // Total funds in an account.
  available: string; // Funds available to withdraw or trade.
  holds: string; // Funds on hold (not available for use).
  transferable: string; // Funds available to transfer.
}

/**
 *
 ***********
 * Spot Trading
 ***********
 *
 */

/**
 *
 * Market data
 *
 */

// ResponseTypes.ts

interface ChainInfo {
  chainName: string;
  withdrawalMinSize: string;
  withdrawalMinFee: string;
  isWithdrawEnabled: boolean;
  isDepositEnabled: boolean;
  confirms: number;
  preConfirms: number;
  contractAddress: string;
  chainId: string;
}

export interface CurrencyInfo {
  currency: string;
  name: string;
  fullName: string;
  precision: number;
  confirms: number | null;
  contractAddress: string | null;
  isMarginEnabled: boolean;
  isDebitEnabled: boolean;
  chains: ChainInfo[];
}

export interface SymbolInfo {
  symbol: string;
  name: string;
  baseCurrency: string;
  quoteCurrency: string;
  feeCurrency: string;
  market: string;
  baseMinSize: string;
  quoteMinSize: string;
  baseMaxSize: string;
  quoteMaxSize: string;
  baseIncrement: string;
  quoteIncrement: string;
  priceIncrement: string;
  priceLimitRate: string;
  minFunds: string;
  isMarginEnabled: boolean;
  enableTrading: boolean;
}

export interface TickerInfo {
  sequence: string;
  price: string;
  size: string;
  bestAsk: string;
  bestAskSize: string;
  bestBid: string;
  bestBidSize: string;
  time: number;
}

export interface AllTickersInfo {
  time: number;
  ticker: TickerInfo[];
}

export interface OrderBookLevel {
  sequence: string;
  time: number;
  bids: [string, string][];
  asks: [string, string][];
}

export interface TradeHistory {
  sequence: string;
  time: number;
  price: string;
  size: string;
  side: string;
}

export interface Kline {
  startAt: string;
  open: string;
  close: string;
  high: string;
  low: string;
  volume: string;
  amount: string;
}

/**
 *
 * Spot HF trade
 *
 */

export interface PlaceHFOrderSyncResponse {
  orderId: string; // An order Id is returned once an order is successfully placed.
  orderTime: number; // order time
  originSize: string; // original order size
  dealSize: string; // deal size
  remainSize: string; // remain size
  canceledSize: string; // Cumulative number of cancellations
  status: string; // Order Status. open: the order is active; done: the order has been completed
  matchTime: number; // matching time
}

export interface PlaceMultipleHFOrdersResponse {
  orderId: string;
  success?: boolean;
  failMsg?: string; // Reason of failure, optional based on success status
}

export interface PlaceMultipleHFOrdersSyncResponse {
  orderId: string; // An order Id is returned once an order is successfully placed.
  orderTime: number; // order time
  originSize: string; // original order size
  dealSize: string; // deal size
  remainSize: string; // remain size
  canceledSize: string; // Cumulative number of cancellations
  status: string; // Order Status. open: the order is active; done: the order has been completed
  matchTime: number; // matching time
  success: boolean; // Whether the order was placed successfully.
}

export interface SyncCancelHFOrderResponse {
  orderId: string; // order Id
  originSize: string; // original order size
  dealSize: string; // deal size
  remainSize: string; // remain size
  canceledSize: string; // Cumulative number of cancellations
  status: string; // Order Status. open: the order is active; done: the order has been completed
}

export interface CancelAllHFOrdersBySymbolResponse {
  orderId: string; // order Id
  cancelSize: string; // Size of the order to be canceled
}

export interface CancelAllHFOrdersResponse {
  succeedSymbols?: string[]; // Cancel order successful symbol
  failedSymbols?: {
    symbol: string; // Cancel order failed symbol
    error: string; // Error message
  }[];
}

export interface AutoCancelHFOrderSettingQueryResponse {
  timeout: number; // Auto cancel order trigger setting time, the unit is second. range: timeout=-1 (meaning unset) or 5 <= timeout <= 86400
  symbols: string; // List of trading pairs. Separated by commas, empty means all trading pairs
  currentTime: number; // System current time (in seconds)
  triggerTime: number; // Trigger cancellation time (in seconds)
}

export interface GetHFFilledListResponse {
  items: {
    id: number; // Id of transaction detail
    symbol: string; // Trading pair
    tradeId: number; // Trade Id
    orderId: string; // Order Id
    counterOrderId: string; // Counterparty order Id
    side: string; // Buy or sell
    liquidity: string; // Liquidity type: taker or maker
    forceTaker: boolean; // Whether or not to forcefully process as taker
    price: string; // Order price
    size: string; // Order size
    funds: string; // Turnover
    fee: string; // Service fee
    feeRate: string; // Fee rate
    feeCurrency: string; // Currency used to calculate fees
    stop: string; // Take Profit and Stop Loss type, currently HFT does not support the Take Profit and Stop Loss type, so it is empty
    tradeType: string; // Trade type: TRADE(Spot Trading)
    type: string; // Order type: limit or market
    createdAt: number; // Transaction(Creation) time
  }[];
  lastId: number;
}

export interface HFOrder {
  id: string; // Order id, a unique identifier pertaining to the order
  symbol: string; // Trading pair
  opType: string; // Operation type: DEAL
  type: string; // Order type
  side: string; // Buy or sell
  price: string; // Order price
  size: string; // Order size
  dealSize: string; // Number of filled transactions
  cancelledSize: string; // Number of canceled transactions
  remainSize: string; // Number of remain transactions
  funds: string; // Order amount
  dealFunds: string; // Number of filled funds
  cancelledFunds: string; // Number of canceled funds
  remainFunds: string; // Number of remain funds
  fee: string; // Service fee
  feeCurrency: string; // Currency used to calculate fees
  stp: string; // Self trade protection
  timeInForce: string; // Time in force
  postOnly: boolean; // Is it post only?
  hidden: boolean; // Is it a hidden order?
  iceberg: boolean; // Is it an iceberg order?
  visibleSize: string; // Visible size of iceberg order in order book.
  cancelAfter: number; // A GTT timeInForce that expires in n seconds
  channel: string; // Source of orders
  clientOid: string; // Identifier created by the client
  remark: string; // Order description
  tags: string; // Order identifier
  active: boolean; // Order status: true-The status of the order is active; false-The status of the order is done
  inOrderBook: boolean; // Whether to enter the orderbook: true: enter the orderbook; false: not enter the orderbook
  cancelExist: boolean; // Are there any cancellation records pertaining to the order?
  createdAt: number; // Order creation time
  lastUpdatedAt: number; // Last update time of order
  tradeType: string; // Trade type: TRADE (Spot Trading)
}

/**
 *
 * Orders
 *
 */

export interface MultipleOrdersResponse {
  symbol: string;
  type?: string;
  side: string;
  price: string;
  size: string;
  funds?: any;
  stp?: string;
  stop?: string;
  stopPrice?: any;
  timeInForce?: string;
  cancelAfter?: number;
  postOnly?: boolean;
  hidden?: boolean;
  iceberg?: boolean;
  visibleSize?: any;
  channel: string;
  id: string;
  status: string;
  failMsg?: any;
  clientOid: string;
}

export interface OrderListResponse {
  currentPage: number;
  pageSize: number;
  totalNum: number;
  totalPage: number;
  items: OrderListItem[];
}

export interface OrderListItem {
  id: string;
  symbol: string;
  opType: string;
  type: string;
  side: string;
  price: string;
  size: string;
  funds: string;
  dealFunds: string;
  dealSize: string;
  fee: string;
  feeCurrency: string;
  stp: string;
  stop: string;
  stopTriggered: boolean;
  stopPrice: string;
  timeInForce: string;
  postOnly: boolean;
  hidden: boolean;
  iceberg: boolean;
  visibleSize: string;
  cancelAfter: number;
  channel: string;
  clientOid: string;
  remark: string;
  tags: string;
  isActive: boolean;
  cancelExist: boolean;
  createdAt: number;
  tradeType: string;
}

// PlaceMultipleOrdersResponse interface
export interface PlaceMultipleOrdersItemResponse {
  symbol: string; // symbol For Example，ETH-BTC
  type?: string; // only limit (default is limit)
  side: string; // buy or sell
  price: string; // price per base currency
  size: string; // amount of base currency to buy or sell
  funds?: any; // Order amount (optional, can be null)
  stp?: string; // self trade prevention, is divided into CN, CO, CB, and DC strategies
  stop?: string; // Either loss or entry. Requires stopPrice to be defined
  stopPrice?: any; // Need to be defined if stop is specified.
  timeInForce?: string; // GTC, GTT, IOC, or FOK (default is GTC).
  cancelAfter?: number; // Cancels in n seconds, with GTT as the time in force strategy
  postOnly?: boolean; // Post only identifier, invalid when the time in force strategy is IOC or FOK
  hidden?: boolean; // Hidden or not (not shown in order book)
  iceberg?: boolean; // Whether or not only visible portions of orders are shown in iceberg orders
  visibleSize?: any; // Maximum visible quantity in iceberg orders (optional, can be null)
  channel: string; // Channel through which the order was placed
  id: string; // Unique identifier for the order
  status: string; // Order creation results (success, fail)
  failMsg?: any; // Reason of failure (optional, can be null)
  clientOid: string; // Client Order Id, unique identifier created by the user, the use of UUID is recommended
}

export interface PlaceMultipleOrdersResponse {
  items: PlaceMultipleOrdersItemResponse[];
}

/**
 *
 * Fills
 *
 */

export interface FillItemResponse {
  symbol: string; // symbol.
  tradeId: string; // trade id, it is generated by Matching engine.
  orderId: string; // Order ID, unique identifier of an order.
  counterOrderId: string; // counter order id.
  side: 'buy' | 'sell'; // transaction direction, include buy and sell.
  price: string; // order price
  size: string; // order quantity
  funds: string; // order funds
  type: 'limit' | 'market' | 'limit_stop' | 'market_stop'; // order type, e.g. limit, market, stop_limit.
  fee: string; // fee
  feeCurrency: string; // charge fee currency
  stop: string; // stop type, include entry and loss
  liquidity: 'taker' | 'maker'; // include taker and maker
  forceTaker: boolean; // forced to become taker, include true and false
  createdAt: number; // create time
  tradeType: 'TRADE' | 'MARGIN_TRADE' | 'MARGIN_ISOLATED_TRADE'; // The type of trading: TRADE（Spot Trading）, MARGIN_TRADE (Margin Trading).
}

export interface GetFilledListResponse {
  currentPage: number;
  pageSize: number;
  totalNum: number;
  totalPage: number;
  items: FillItemResponse[];
}

/**
 *
 * Stop order
 *
 */

export interface StopOrdersListResponse {
  currentPage: number;
  pageSize: number;
  totalNum: number;
  totalPage: number;
  items: StopOrderItemResponse[];
}

export interface StopOrderItemResponse {
  id: string;
  symbol: string;
  userId: string;
  status: 'NEW' | 'TRIGGERED';
  type: 'limit' | 'market';
  side: 'buy' | 'sell';
  price: string;
  size: string;
  funds: string | null;
  stp: string | null;
  timeInForce: 'GTC' | 'GTT' | 'IOC' | 'FOK';
  cancelAfter: number;
  postOnly: boolean;
  hidden: boolean;
  iceberg: boolean;
  visibleSize: string | null;
  channel: string;
  clientOid: string;
  remark: string | null;
  tags: string | null;
  orderTime: number;
  domainId: string;
  tradeSource: 'USER' | 'MARGIN_SYSTEM';
  tradeType: 'TRADE' | 'MARGIN_TRADE' | 'MARGIN_ISOLATED_TRADE';
  feeCurrency: string;
  takerFeeRate: string;
  makerFeeRate: string;
  createdAt: number;
  stop: 'loss' | 'entry';
  stopTriggerTime: number | null;
  stopPrice: string;
}
