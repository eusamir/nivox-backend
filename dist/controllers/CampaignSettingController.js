"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = exports.index = void 0;
const socket_1 = require("../libs/socket");
const ListService_1 = __importDefault(require("../services/CampaignSettingServices/ListService"));
const CreateService_1 = __importDefault(require("../services/CampaignSettingServices/CreateService"));
const index = async (req, res) => {
    const { companyId } = req.user;
    const records = await (0, ListService_1.default)({
        companyId
    });
    return res.json(records);
};
exports.index = index;
const store = async (req, res) => {
    const { companyId } = req.user;
    const data = req.body;
    const record = await (0, CreateService_1.default)(data, companyId);
    const io = (0, socket_1.getIO)();
    io.of(String(companyId))
        .emit(`company-${companyId}-campaignSettings`, {
        action: "create",
        record
    });
    return res.status(200).json(record);
};
exports.store = store;
/*
export const update = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = req.body as StoreData;
  const { companyId } = req.user;

  const schema = Yup.object().shape({
    name: Yup.string().required()
  });

  try {
    await schema.validate(data);
  } catch (err: any) {
    throw new AppError(err.message);
  }

  const { id } = req.params;

  const record = await UpdateServiceCampaignSettings({
    ...data,
    id
  });

  const io = getIO();
  io.of(String(companyId))
  .emit(`company-${companyId}-campaign`, {
    action: "update",
    record
  });

  return res.status(200).json(record);
};
*/
