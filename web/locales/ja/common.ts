import { CommonEn } from '../en/common';

type I18nKeys = keyof typeof CommonEn;

interface Resources {
  translation: Record<I18nKeys, string>;
}

export const CommonJp: Resources['translation'] = {
  Knowledge_Space: 'ナレッジベース',
  space: 'ナレッジベース',
  Vector: 'ベクトル',
  Owner: '作成者',
  Count: 'ドキュメント数',
  File_type_Invalid: 'ファイルタイプエラー',
  Knowledge_Space_Config: 'ナレッジベース構成',
  Choose_a_Datasource_type: 'ナレッジベースの種類',
  Segmentation: 'セグメント',
  No_parameter: 'セグメントパラメータの構成は不要',
  Knowledge_Space_Name: 'ナレッジベース名',
  Please_input_the_name: '名前を入力してください',
  Please_input_the_owner: '作成者を入力してください',
  Please_select_file: '少なくとも1つのファイルを選択してください',
  Description: '説明',
  Storage: 'ストレージタイプ',
  Domain: '分野タイプ',
  Please_input_the_description: '説明を入力してください',
  Please_select_the_storage: 'ストレージタイプを選択してください',
  Please_select_the_domain_type: '分野タイプを選択してください',
  Next: '次へ',
  the_name_can_only_contain: '名前には数字、アルファベット、日本語文字、-または_のみを含めることができます',
  Text: 'テキスト',
  'Fill your raw text': '元のテキストを入力してください',
  URL: 'URL',
  Fetch_the_content_of_a_URL: 'URLの内容を取得',
  Document: 'ドキュメント',
  Upload_a_document: 'ドキュメントをアップロードします。対応する形式はPDF、CSV、Text、PowerPoint、Word、Markdown、Zipです',
  Name: '名前',
  Text_Source: 'テキストの出典（オプション）',
  Please_input_the_text_source: 'テキストの出典を入力してください',
  Sync: '同期',
  Back: '戻る',
  Finish: '完了',
  Web_Page_URL: 'ウェブページURL',
  Please_input_the_Web_Page_URL: 'ウェブページのURLを入力してください',
  Select_or_Drop_file: 'ファイルを選択またはドラッグ＆ドロップしてください',
  Documents: 'ドキュメント',
  Chat: 'チャット',
  Add_Datasource: 'データソースを追加',
  View_Graph: 'グラフを表示',
  Arguments: 'パラメータ',
  Type: 'タイプ',
  Size: 'サイズ',
  Last_Sync: '最終同期時刻',
  Status: 'ステータス',
  Result: '結果',
  Details: '詳細',
  Delete: '削除',
  Operation: '操作',
  Submit: '送信',
  close: '閉じる',
  Chunks: 'チャンク',
  Content: '内容',
  Meta_Data: 'メタデータ',
  Please_select_a_file: 'ファイルをアップロードしてください',
  Please_input_the_text: 'テキストを入力してください',
  Embedding: '埋め込み',
  topk: 'TopK',
  the_top_k_vectors: '類似度スコアに基づく上位k個のベクトル',
  recall_score: 'リコールスコア',
  Set_a_threshold_score: '類似ベクトル検索の閾値スコアを設定',
  recall_type: 'リコールタイプ',
  model: 'モデル',
  A_model_used: 'テキストやその他のデータのベクトル表現を生成するために使用されるモデル',
  Automatic: '自動分割',
  Process: '分割処理',
  Automatic_desc: '分割と前処理ルールを自動設定します。',
  chunk_size: 'チャンクサイズ',
  The_size_of_the_data_chunks: '処理に使用されるデータチャンクのサイズ',
  chunk_overlap: 'チャンクオーバーラップ',
  The_amount_of_overlap: '隣接するデータチャンク間の重なり量',
  scene: 'シーン',
  A_contextual_parameter: 'プロンプトを使用する設定や環境を定義するためのコンテキストパラメータ',
  template: 'テンプレート',
  structure_or_format: '所定のプロンプト構造または形式により、AIシステムが望ましいスタイルまたはトーンに沿った応答を生成するのに役立つ',
  max_token: '最大トークン',
  max_iteration: '最大イテレーション',
  concurrency_limit: '並列制限',
  The_maximum_number_of_tokens: 'プロンプトで許可される最大トークンまたは単語数',
  Theme: 'テーマ',
  Port: 'ポート',
  Username: 'ユーザー名',
  Password: 'パスワード',
  Remark: '備考',
  Edit: '編集',
  Database: 'データベース',
  Data_Source: 'データセンター',
  Close_Sidebar: 'サイドバーを閉じる',
  Show_Sidebar: 'サイドバーを開く',
  language: '言語',
  choose_model: 'モデルを選択してください',
  data_center_desc: 'DB-GPTは、データベースとの対話やドキュメントベースの会話をサポートし、使いやすいデータセンター管理インターフェースも提供します。',
  create_database: 'データベースを作成',
  create_knowledge: 'ナレッジベースを作成',
  create_flow: 'ワークフローを作成',
  path: 'パス',
  model_manage: 'モデル管理',
  stop_model_success: 'モデル停止成功',
  create_model: 'モデルを作成',
  model_select_tips: 'モデルを選択してください',
  submit: '送信',
  start_model_success: 'モデル起動成功',
  download_model_tip: 'まずモデルをダウンロードしてください！',
  Plugins: 'プラグインリスト',
  try_again: '再試行',
  no_data: 'データがありません',
  Prompt: 'プロンプト',
  Open_Sidebar: 'サイドバーを開く',
  verify: '確認',
  cancel: 'キャンセル',
  Edit_Success: '編集成功',
  Add: '追加',
  Add_Success: '追加成功',
  Error_Message: 'エラーが発生しました',
  Please_Input: '入力してください',
  Prompt_Info_Scene: 'シーン',
  Prompt_Info_Sub_Scene: 'サブシーン',
  Prompt_Info_Name: '名前',
  Prompt_Info_Content: '内容',
  Public: '公開',
  Private: '非公開',
  Lowest: '最低',
  Missed: '理解できませんでした',
  Lost: '答えられませんでした',
  Incorrect: '間違った回答',
  Verbose: '冗長',
  Best: '最高',
  Rating: '評価',
  Q_A_Category: 'Q&Aカテゴリー',
  Q_A_Rating: 'Q&A評価',
  feed_back_desc:
    '0: 結果なし\n' +
    '1: 結果ありだが質問を理解していない\n' +
    '2: 質問を理解しているが答えられない\n' +
    '3: 質問を理解して答えるが内容が誤っている\n' +
    '4: 質問を理解し正確に回答するが冗長\n' +
    '5: 質問を理解し正確かつ簡潔に回答\n',
  input_count: '入力合計',
  input_unit: '文字',
  Click_Select: 'クリックして選択',
  Quick_Start: 'クイックスタート',
  Select_Plugins: 'プラグインを選択',
  Search: '検索',
  Reset: 'リセット',
  Update_From_Github: 'Githubプラグインを更新',
  Upload: 'アップロード',
  Market_Plugins: 'プラグインマーケット',
  My_Plugins: '私のプラグイン',
  Del_Knowledge_Tips: 'このナレッジベースを削除しますか？',
  Del_Document_Tips: 'このドキュメントを削除しますか？',
  Tips: 'ヒント',
  Limit_Upload_File_Count_Tips: '一度に1つのファイルのみアップロードできます',
  To_Plugin_Market: 'プラグインマーケットへ',
  Summary: '要約',
  stacked_column_chart: '積み上げ縦棒グラフ',
  column_chart: '縦棒グラフ',
  percent_stacked_column_chart: '百分率積み上げ縦棒グラフ',
  grouped_column_chart: 'グループ化縦棒グラフ',
  time_column: '時間列',
  pie_chart: '円グラフ',
  line_chart: '折れ線グラフ',
  area_chart: '面グラフ',
  stacked_area_chart: '積み上げ面グラフ',
  scatter_plot: '散布図',
  bubble_chart: 'バブルチャート',
  stacked_bar_chart: '積み上げ横棒グラフ',
  bar_chart: '横棒グラフ',
  percent_stacked_bar_chart: '百分率積み上げ横棒グラフ',
  grouped_bar_chart: 'グループ化横棒グラフ',
  water_fall_chart: 'ウォーターフォールチャート',
  table: '表',
  multi_line_chart: '複数折れ線グラフ',
  multi_measure_column_chart: '複数指標縦棒グラフ',
  multi_measure_line_chart: '複数指標折れ線グラフ',
  Advices: '自動推薦',
  Retry: '再試行',
  Load_more: 'さらに読み込む',
  new_chat: '新しい会話を作成',
  choice_agent_tip: 'エージェントを選択してください',
  no_context_tip: '質問を入力してください',
  Terminal: 'ターミナル',
  used_apps: '最近使用',
  app_in_mind: '興味のあるアプリが見つからない場合は、',
  explore: 'エクスプローラーを開く',
  Discover_more: 'さらに発見',
  sdk_insert: 'SDK接続',
  my_apps: '私のアプリ',
  awel_flow: 'AWELワークフロー',
  save: '保存',
  add_node: 'ノードを追加',
  no_node: '編成可能なノードがありません',
  connect_warning: 'ノードを接続できません',
  flow_modal_title: 'ワークフローを保存',
  flow_name: 'ワークフロー名',
  flow_description: 'ワークフローの説明',
  flow_name_required: 'ワークフロー名を入力してください',
  flow_description_required: 'ワークフローの説明を入力してください',
  save_flow_success: 'ワークフローを保存しました',
  delete_flow_confirm: 'このワークフローを削除してもよろしいですか？',
  related_nodes: '関連ノード',
  language_select_tips: '言語を選択してください',
  add_resource: 'リソースを追加',
  team_modal: '作業モード',
  App: 'アプリケーション',
  resource: 'リソース',
  resource_name: 'リソース名',
  resource_type: 'リソースタイプ',
  resource_value: 'パラメータ',
  resource_dynamic: '動的',
  Please_input_the_work_modal: '作業モードを選択してください',
  available_resources: '利用可能なリソース',
  edit_new_applications: '新しいアプリケーションを編集',
  collect: 'お気に入り',
  collected: 'お気に入り済み',
  create: '作成',
  Agents: 'エージェント',
  edit_application: 'アプリケーションを編集',
  add_application: 'アプリケーションを追加',
  app_name: 'アプリケーション名',
  input_app_name: 'アプリケーション名を入力してください',
  LLM_strategy: 'モデル戦略',
  please_select_LLM_strategy: 'モデル戦略を選択してください',
  LLM_strategy_value: 'モデル戦略パラメータ',
  please_select_LLM_strategy_value: 'モデル戦略パラメータを選択してください',
  operators: '演算子',
  Chinese: '中国語',
  English: '英語',
  Japanese: '日本語',
  docs: '文書',
  apps: '全体',
  please_enter_the_keywords: 'キーワードを入力してください',
  input_tip: 'モデルを選択し、記述を入力して開始してください',
  create_app: 'アプリケーションを作成',
  copy_url: 'クリックして共有リンクをコピー',
  double_click_open: 'ダブルクリックして開く',
  construct: 'アプリ管理',
  chat_online: 'オンライン会話',
  recommend_apps: 'おすすめアプリ',
  all_apps: 'すべてのアプリ',
  latest_apps: '最新のアプリ',
  my_collected_apps: 'お気に入りのアプリ',
  collect_success: 'お気に入りに追加しました',
  cancel_success: 'お気に入りを解除しました',
  published: '公開済み',
  unpublished: '未公開',
  start_chat: '会話を開始',
  native_app: 'ネイティブアプリ',
  native_type: 'アプリタイプ',
  temperature: '温度',
  update: '更新',
  refreshSuccess: 'リフレッシュ成功',
  Download: 'ダウンロード',
  app_type_select: 'アプリタイプを選択してください',
  please_select_param: 'パラメータを選択してください',
  please_select_model: 'モデルを選択してください',
  please_input_temperature: 'temperature値を入力してください',
  select_workflow: 'ワークフローを選択',
  please_select_workflow: 'ワークフローを選択してください',
  recommended_questions: 'おすすめの質問',
  question: '質問',
  please_input_recommended_questions: 'おすすめの質問を入力してください',
  is_effective: '有効かどうか',
  add_question: '質問を追加',
  update_success: '更新成功',
  update_failed: '更新失敗',
  please_select_prompt: 'プロンプトを選択してください',
  details: '詳細',
  choose: '選択',
  please_choose: 'まず選択してください',
  want_delete: '本当に削除しますか？',
  success: '成功',
  input_parameter: '入力パラメータ',
  output_structure: '出力構造',
  User_input: 'ユーザー入力',
  LLM_test: 'LLMテスト',
  Output_verification: '出力確認',
  select_scene: 'シーンを選択',
  select_type: 'タイプを選択',
  Please_complete_the_input_parameters: '入力パラメータをすべて入力してください',
  Please_fill_in_the_user_input: 'ユーザー入力内容を入力してください',
  help: 'お手伝いできます：',
  Refresh_status: 'ステータスを更新',
  Recall_test: 'リコールテスト',
  synchronization: '一括同期',
  Synchronization_initiated: '同期が開始されました。しばらくお待ちください',
  Edit_document: 'ドキュメントを編集',
  Document_name: 'ドキュメント名',
  Correlation_problem: '関連する問題',
  Add_problem: '問題を追加',
  New_knowledge_base: 'ナレッジベースを追加',
  yuque: 'Yuqueドキュメント',
  Get_yuque_document: 'Yuqueドキュメントの内容を取得',
  document_url: 'ドキュメントのURL',
  input_document_url: 'ドキュメントのURLを入力してください',
  Get_token: '最初にチームナレッジベースのトークンを取得してください。トークンの取得はこちら',
  Reference_link: '参考リンク',
  document_token: 'ドキュメントトークン',
  input_document_token: 'ドキュメントトークンを入力してください',
  input_question: '質問を入力してください',
  detail: '詳細',
  Manual_entry: '手動入力',
  Data_content: 'データ内容',
  Main_content: '主な内容',
  Auxiliary_data: '補助データ',
  enter_question_first: '最初に質問を入力してください',
  Update_successfully: '更新に成功しました',
  Create_successfully: '作成に成功しました',
  Update_failure: '更新に失敗しました',
  Create_failure: '作成に失敗しました',
  View_details: '詳細を見る',
  All: 'すべて',
  Please_input_prompt_name: 'プロンプト名を入力してください',
  Copy_Btn: 'コピー',
  Delete_Btn: '削除',
  publish: '公開',
  unpublish: '公開を取り消す',
  publish_desc: 'このアプリを公開してよろしいですか？',
  unPublish_desc: 'このアプリの公開を取り消してよろしいですか？',
  published_success: '公開に成功しました',
  dbgpts_community: 'DBGPTSコミュニティ',
  community_dbgpts: 'コミュニティDBGPTS',
  my_dbgpts: 'マイDBGPTS',
  Refresh_dbgpts: 'コミュニティGitリポジトリから更新',
  workflow: 'ワークフロー',
  resources: 'リソース',
  app: 'アプリ',
} as const;