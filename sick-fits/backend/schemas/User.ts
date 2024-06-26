import { password, relationship, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

export const User = list({
    fields: {
        name: text({ isRequired: true }),
        email: text({ isRequired: true, isUnique: true }),
        password: password(),
        cart: relationship({ ref: 'CartItem.user', many: true }),
        orders: relationship({ ref: 'Order.user', many: true }),
        role: relationship({ ref: 'Role.assignedTo' })
    }
})