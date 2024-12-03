import { ChatEn } from '../en/chat';

type I18nKeys = keyof typeof ChatEn;

export interface Resources {
  translation: Record<I18nKeys, string>;
}

export const ChatJp: Resources['translation'] = {
  dialog_list: '会話リスト',
  delete_chat: '会話を削除',
  delete_chat_confirm: '会話を削除してもよろしいですか？',
  input_tips: '何でも質問できます。Shift + Enterで改行',
  sent: '送信',
  answer_again: '再回答',
  feedback_tip: '具体的な問題やより良い回答を記述してください',
  thinking: '考え中',
  stop_replying: '返信を停止',
  erase_memory: '記憶を消去',
  copy_success: 'コピー成功',
  copy_failed: 'コピー失敗',
  copy_nothing: 'コピーする内容が空です',
  file_tip: 'アップロード後にファイルを変更することはできません',
  chat_online: 'オンライン会話',
  assistant: 'プラットフォームアシスタント', // リンスープラットフォームアシスタント
  model_tip: '現在のアプリはモデル選択をサポートしていません',
  temperature_tip: '現在のアプリは温度設定をサポートしていません',
  extend_tip: '現在のアプリは拡張設定をサポートしていません',
} as const;
