import { integer, relationship, text, virtual } from "@keystone-next/fields"
import { list } from "@keystone-next/keystone/schema"
import formatMoney from "../lib/formatMoney"


const Order = list({
    ui: { labelField: 'label' },
    fields: {
        label: virtual({
            graphQLReturnType: 'String',
            resolver: (item) => {
                return `Furkan ${formatMoney(item.total)}`
            }
        }),
        total: integer(),
        items: relationship({ ref: 'OrderItem.order', many: true }),
        user: relationship({ ref: 'User.orders' }),
        charge: text(),
    }
})

export default Order;