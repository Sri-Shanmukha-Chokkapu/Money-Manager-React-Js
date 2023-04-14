import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {title, id, amount, type} = transactionDetails

  const onDeleteTransaction = () => {
    deleteTransaction(id)
  }

  return (
    <li className="transaction-item">
      <p className="transaction-text">{title}</p>
      <p className="transaction-text">Rs {amount}</p>
      <div className="delete-container">
        <p className="transaction-type">{type}</p>
        <button
          className="delete-button"
          type="button"
          onClick={onDeleteTransaction}
          data-testid="delete"
        >
          <img
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
