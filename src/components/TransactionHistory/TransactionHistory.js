import React from 'react';
import PropTypes from 'prop-types';

import styles from "./TransactionHistory.module.css"

const TransactionHistory = ({transactions}) => (
    <table className={styles.Table}>
  <thead>
    <tr className={styles.TableHeadRow}>
      <th className={styles.HeadRow}>Type</th>
      <th className={styles.HeadRow}>Amount</th>
      <th className={styles.HeadRow}>Currency</th>
    </tr>
  </thead>

  <tbody>
    {transactions.map(transaction => 
        <tr key={transaction.id}>
            <td className={styles.TableItem}>{transaction.type}</td>
            <td className={styles.TableItem}>{transaction.amount}</td>
            <td className={styles.TableItem}>{transaction.currency}</td>
        </tr>
        )}
  </tbody>
</table>
)

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
    )
  }

export default TransactionHistory;