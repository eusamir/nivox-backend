/// <reference types="node" />
/// <reference types="node" />
import { Logger } from 'pino';
import { proto } from '../../WAProto';
import { AnyMediaMessageContent, AnyMessageContent, MediaGenerationOptions, MessageContentGenerationOptions, MessageGenerationOptions, MessageGenerationOptionsFromContent, MessageUserReceipt, WAMessage, WAMessageContent, WAProto } from '../Types';
import { MediaDownloadOptions } from './messages-media';
/**
 * Uses a regex to test whether the string contains a URL, and returns the URL if it does.
 * @param text eg. hello https://google.com
 * @returns the URL, eg. https://google.com
 */
export declare const extractUrlFromText: (text: string) => string | undefined;
export declare const generateLinkPreviewIfRequired: (text: string, getUrlInfo: MessageGenerationOptions['getUrlInfo'], logger: MessageGenerationOptions['logger']) => Promise<import("../Types").WAUrlInfo | undefined>;
export declare const prepareWAMessageMedia: (message: AnyMediaMessageContent, options: MediaGenerationOptions) => Promise<proto.Message | {
    handle: string | undefined;
    conversation: string;
    senderKeyDistributionMessage?: proto.Message.ISenderKeyDistributionMessage | null | undefined;
    imageMessage?: proto.Message.IImageMessage | null | undefined;
    contactMessage?: proto.Message.IContactMessage | null | undefined;
    locationMessage?: proto.Message.ILocationMessage | null | undefined;
    extendedTextMessage?: proto.Message.IExtendedTextMessage | null | undefined;
    documentMessage?: proto.Message.IDocumentMessage | null | undefined;
    audioMessage?: proto.Message.IAudioMessage | null | undefined;
    videoMessage?: proto.Message.IVideoMessage | null | undefined;
    call?: proto.Message.ICall | null | undefined;
    chat?: proto.Message.IChat | null | undefined;
    protocolMessage?: proto.Message.IProtocolMessage | null | undefined;
    contactsArrayMessage?: proto.Message.IContactsArrayMessage | null | undefined;
    highlyStructuredMessage?: proto.Message.IHighlyStructuredMessage | null | undefined;
    fastRatchetKeySenderKeyDistributionMessage?: proto.Message.ISenderKeyDistributionMessage | null | undefined;
    sendPaymentMessage?: proto.Message.ISendPaymentMessage | null | undefined;
    liveLocationMessage?: proto.Message.ILiveLocationMessage | null | undefined;
    requestPaymentMessage?: proto.Message.IRequestPaymentMessage | null | undefined;
    declinePaymentRequestMessage?: proto.Message.IDeclinePaymentRequestMessage | null | undefined;
    cancelPaymentRequestMessage?: proto.Message.ICancelPaymentRequestMessage | null | undefined;
    templateMessage?: proto.Message.ITemplateMessage | null | undefined;
    stickerMessage?: proto.Message.IStickerMessage | null | undefined;
    groupInviteMessage?: proto.Message.IGroupInviteMessage | null | undefined;
    templateButtonReplyMessage?: proto.Message.ITemplateButtonReplyMessage | null | undefined;
    productMessage?: proto.Message.IProductMessage | null | undefined;
    deviceSentMessage?: proto.Message.IDeviceSentMessage | null | undefined;
    messageContextInfo?: proto.IMessageContextInfo | null | undefined;
    listMessage?: proto.Message.IListMessage | null | undefined;
    viewOnceMessage?: proto.Message.IFutureProofMessage | null | undefined;
    orderMessage?: proto.Message.IOrderMessage | null | undefined;
    listResponseMessage?: proto.Message.IListResponseMessage | null | undefined;
    ephemeralMessage?: proto.Message.IFutureProofMessage | null | undefined;
    invoiceMessage?: proto.Message.IInvoiceMessage | null | undefined;
    buttonsMessage?: proto.Message.IButtonsMessage | null | undefined;
    buttonsResponseMessage?: proto.Message.IButtonsResponseMessage | null | undefined;
    paymentInviteMessage?: proto.Message.IPaymentInviteMessage | null | undefined;
    interactiveMessage?: proto.Message.IInteractiveMessage | null | undefined;
    reactionMessage?: proto.Message.IReactionMessage | null | undefined;
    stickerSyncRmrMessage?: proto.Message.IStickerSyncRMRMessage | null | undefined;
    interactiveResponseMessage?: proto.Message.IInteractiveResponseMessage | null | undefined;
    pollCreationMessage?: proto.Message.IPollCreationMessage | null | undefined;
    pollUpdateMessage?: proto.Message.IPollUpdateMessage | null | undefined;
    keepInChatMessage?: proto.Message.IKeepInChatMessage | null | undefined;
    documentWithCaptionMessage?: proto.Message.IFutureProofMessage | null | undefined;
    requestPhoneNumberMessage?: proto.Message.IRequestPhoneNumberMessage | null | undefined;
    viewOnceMessageV2?: proto.Message.IFutureProofMessage | null | undefined;
    encReactionMessage?: proto.Message.IEncReactionMessage | null | undefined;
    editedMessage?: proto.Message.IFutureProofMessage | null | undefined;
    viewOnceMessageV2Extension?: proto.Message.IFutureProofMessage | null | undefined;
    pollCreationMessageV2?: proto.Message.IPollCreationMessage | null | undefined;
    scheduledCallCreationMessage?: proto.Message.IScheduledCallCreationMessage | null | undefined;
    groupMentionedMessage?: proto.Message.IFutureProofMessage | null | undefined;
    pinInChatMessage?: proto.Message.IPinInChatMessage | null | undefined;
    pollCreationMessageV3?: proto.Message.IPollCreationMessage | null | undefined;
    scheduledCallEditMessage?: proto.Message.IScheduledCallEditMessage | null | undefined;
    ptvMessage?: proto.Message.IVideoMessage | null | undefined;
    botInvokeMessage?: proto.Message.IFutureProofMessage | null | undefined;
    callLogMesssage?: proto.Message.ICallLogMessage | null | undefined;
    messageHistoryBundle?: proto.Message.IMessageHistoryBundle | null | undefined;
    encCommentMessage?: proto.Message.IEncCommentMessage | null | undefined;
    bcallMessage?: proto.Message.IBCallMessage | null | undefined;
    lottieStickerMessage?: proto.Message.IFutureProofMessage | null | undefined;
    eventMessage?: proto.Message.IEventMessage | null | undefined;
    commentMessage?: proto.Message.ICommentMessage | null | undefined;
    newsletterAdminInviteMessage?: proto.Message.INewsletterAdminInviteMessage | null | undefined;
    extendedTextMessageWithParentKey?: proto.Message.IExtendedTextMessageWithParentKey | null | undefined;
    placeholderMessage?: proto.Message.IPlaceholderMessage | null | undefined;
    encEventUpdateMessage?: proto.Message.IEncEventUpdateMessage | null | undefined;
}>;
export declare const prepareDisappearingMessageSettingContent: (ephemeralExpiration?: number) => proto.Message;
/**
 * Generate forwarded message content like WA does
 * @param message the message to forward
 * @param options.forceForward will show the message as forwarded even if it is from you
 */
export declare const generateForwardMessageContent: (message: WAMessage, forceForward?: boolean) => proto.IMessage;
export declare const generateWAMessageContent: (message: AnyMessageContent, options: MessageContentGenerationOptions) => Promise<proto.Message>;
export declare const generateWAMessageFromContent: (jid: string, message: WAMessageContent, options: MessageGenerationOptionsFromContent) => proto.WebMessageInfo;
export declare const generateWAMessage: (jid: string, content: AnyMessageContent, options: MessageGenerationOptions) => Promise<proto.WebMessageInfo>;
/** Get the key to access the true type of content */
export declare const getContentType: (content: WAProto.IMessage | undefined) => keyof proto.IMessage | undefined;
/**
 * Normalizes ephemeral, view once messages to regular message content
 * Eg. image messages in ephemeral messages, in view once messages etc.
 * @param content
 * @returns
 */
export declare const normalizeMessageContent: (content: WAMessageContent | null | undefined) => WAMessageContent | undefined;
/**
 * Extract the true message content from a message
 * Eg. extracts the inner message from a disappearing message/view once message
 */
export declare const extractMessageContent: (content: WAMessageContent | undefined | null) => WAMessageContent | undefined;
/**
 * Returns the device predicted by message ID
 */
export declare const getDevice: (id: string) => "android" | "unknown" | "web" | "ios" | "desktop";
/** Upserts a receipt in the message */
export declare const updateMessageWithReceipt: (msg: Pick<WAMessage, 'userReceipt'>, receipt: MessageUserReceipt) => void;
/** Update the message with a new reaction */
export declare const updateMessageWithReaction: (msg: Pick<WAMessage, 'reactions'>, reaction: proto.IReaction) => void;
/** Update the message with a new poll update */
export declare const updateMessageWithPollUpdate: (msg: Pick<WAMessage, 'pollUpdates'>, update: proto.IPollUpdate) => void;
type VoteAggregation = {
    name: string;
    voters: string[];
};
/**
 * Aggregates all poll updates in a poll.
 * @param msg the poll creation message
 * @param meId your jid
 * @returns A list of options & their voters
 */
export declare function getAggregateVotesInPollMessage({ message, pollUpdates }: Pick<WAMessage, 'pollUpdates' | 'message'>, meId?: string): VoteAggregation[];
/** Given a list of message keys, aggregates them by chat & sender. Useful for sending read receipts in bulk */
export declare const aggregateMessageKeysNotFromMe: (keys: proto.IMessageKey[]) => {
    jid: string;
    participant: string | undefined;
    messageIds: string[];
}[];
type DownloadMediaMessageContext = {
    reuploadRequest: (msg: WAMessage) => Promise<WAMessage>;
    logger: Logger;
};
/**
 * Downloads the given message. Throws an error if it's not a media message
 */
export declare const downloadMediaMessage: (message: WAMessage, type: 'buffer' | 'stream', options: MediaDownloadOptions, ctx?: DownloadMediaMessageContext) => Promise<Buffer | import("stream").Transform>;
/** Checks whether the given message is a media message; if it is returns the inner content */
export declare const assertMediaContent: (content: proto.IMessage | null | undefined) => proto.Message.IVideoMessage | proto.Message.IImageMessage | proto.Message.IAudioMessage | proto.Message.IDocumentMessage | proto.Message.IStickerMessage;
export {};
