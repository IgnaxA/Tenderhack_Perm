import telebot 
from telebot.types import InlineKeyboardMarkup, InlineKeyboardButton, WebAppInfo

bot = telebot.TeleBot("6940057962:AAEDWHMl6NLy0us00mcWK0cN5pZPJnoBIxU")

def gen_markup():
	markup = InlineKeyboardMarkup()
	markup.row_width = 2
	web_app = WebAppInfo("https://127.0.0.1:8080/", provider = "Анатолий")
	markup.add(InlineKeyboardButton("Изменить", web_app=web_app),
			InlineKeyboardButton("Сформировать документ", callback_data="gen"))
	return markup

@bot.message_handler(commands=['start'])
def start(message):
	bot.reply_to(message, "Здравствуйте! Введите номер договора:")
	
@bot.message_handler(content_types='text')
def receiving_message(message):
	bot.send_message(message.chat.id, "Поставщик: Альберт\n Товар: Коза\n Колчиество: 5", reply_markup=gen_markup())

bot.infinity_polling()