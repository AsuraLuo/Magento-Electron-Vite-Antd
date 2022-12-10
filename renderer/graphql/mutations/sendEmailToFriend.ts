import { gql, DocumentNode } from '@apollo/client'

export const SEND_EMAIL_TO_FRIEND: DocumentNode = gql`
  mutation sendEmailToFriend(
    $id: Int!
    $recipients: [SendEmailToFriendRecipientInput]!
    $sender: SendEmailToFriendSenderInput!
  ) {
    sendEmailToFriend(
      input: { product_id: $id, recipients: $recipients, sender: $sender }
    ) {
      sender {
        email
        message
        name
      }
    }
  }
`
