module.exports = {
    data: {
        name: "setvoice",
        description: "Set Voice!",
        options: [{
            type: "STRING",
            name: "speaker",
            description: "変更する声を入力してください",
            required: true,
            choices: [
                { name: "四国めたん", value: "2" },
                { name: "ずんだもん", value: "3" },
                { name: "春日部つむぎ", value: "8" },
                { name: "雨晴はう", value: "10" },
                { name: "波音リツ", value: "9" },
                { name: "玄野武宏", value: "11" },
                { name: "白上虎太郎", value: "12" },
                { name: "青山龍星", value: "13" },
                { name: "冥鳴ひまり", value: "14" },
            ]
        }],
    },
    async execute(interaction) {
        const speaker = interaction.options.getString('speaker');
        await interaction.reply('Set Voice: ' + speaker);
    }
}