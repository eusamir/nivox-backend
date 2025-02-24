"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_autogen_1 = __importDefault(require("swagger-autogen"));
const doc = {
    info: {
        title: 'Nivox api',
        description: 'Documentação api nivox'
    },
    host: 'localhost:8089'
};
const outputFile = './swagger-output.json';
const routes = ['./src/routes/authRoutes.ts', './src/routes/userRoutes.ts',
    './src/routes/ticketRoutes.ts',
    './src/routes/messageRoutes.ts',
    './src/routes/whatsappRoutes.ts',
    './src/routes/companyRoutes.ts',
    './src/routes/contactRoutes.ts',
    './src/routes/dashboardRoutes.ts',
    './src/routes/planRoutes.ts',
    './src/routes/tagRoutes.ts',
    './src/routes/scheduleRoutes.ts',
    './src/routes/apiRoutes.ts', './src/routes/statisticsRoutes.ts',
    './src/routes/chatRoutes.ts',
    './src/routes/flowBuilderRoutes.ts',
    './src/routes/flowCampaignRoutes.ts',
    './src/routes/flowDefaultRoutes.ts',
    './src/routes/webHookRoutes.ts',
    './src/routes/helpRoutes.ts',
    './src/routes/queueRoutes.ts',
    './src/routes/queueIntegrationRoutes.ts', './src/routes/queueOptionRoutes.ts',
    './src/routes/quickMessageRoutes.ts',
    './src/routes/subScriptionRoutes.ts',
    './src/routes/invoicesRoutes.ts',
    './src/routes/promptRouter.ts',
    './src/routes/contactListRoutes.ts',
    './src/routes/contactListItemRoutes.ts',
    './src/routes/ticketNoteRoutes.ts',
    './src/routes/ticketTagRoutes.ts',
    './src/routes/companySettingsRoutes.ts',
    './src/routes/filesRoutes.ts',
    './src/routes/ScheduledMessagesRoutes.ts',];
(0, swagger_autogen_1.default)()(outputFile, routes, doc);
