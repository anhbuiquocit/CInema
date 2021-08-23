import { createSlice, current } from "@reduxjs/toolkit";

export const listFlimSlice = createSlice({
    name: 'listFlim',
    initialState: [
        {
            id: 'flim01',
            name: 'The Sulcde Squad',
            yt_trailler: 'zvfRCIqmvmo',
            link_img: 'https://files.betacorp.vn/files/media%2fimages%2f2021%2f05%2f19%2fthe%2Dsuicide%2Dsquad%2D173138%2D190521%2D11.jpg',
            description: 'Bộ phim là câu chuyện của một người lái xe container và cô con gái nhỏ của mình. Cuộc sống của 2 cha con trên chiếc xe vàng cứ êm đềm diễn ra cho đến ngày cô bé xa cha đi học. Mọi thứ bỗng đảo lộn khi người cha nhận được tin cô con gái của mình bị trầm cảm nặng. Anh càng đau đớn hơn khi biết con mình bị xâm hại. Hành trình đi tìm công lý cho con là những màn đấu trí căng thẳng, những cuộc rượt đuổi khốc liệt và rồi người cha chợt nhận ra rằng anh không chỉ đối đầu với một kẻ xâm hại…',
            director: 'Lương Đình Dũng',
            actor: 'Minh Quang Nguyễn, Thanh Thảo, HHen Nie',
            category: 'hành động, Phiêu lưu',
            time: '100',
            language: 'Tieng Viet',
            date_show: '13/08/2021'
        },
        {
            id: 'flim02',
            name: 'Sát Nhân Trong Gương',
            yt_trailler: 'zvfRCIqmvmo',
            link_img: 'https://files.betacorp.vn/files/media%2fimages%2f2021%2f05%2f19%2fsat%2Dnhan%2Dtrong%2Dguong%2D175419%2D190521%2D50.jpg',
            description: 'Một "phần tiếp theo tinh thần" của bộ phim kinh dị năm 1992 Candyman quay trở lại khu phố Chicago hiện đại, nơi huyền thoại bắt đầu.',
            director: 'Nia DaCosta',
            actor: 'Yahya Abdul-Mateen II, Teyonah Parris, Nathan Stewart-Jarrett, Colman Domingo',
            category: 'Kinh dị, Hồi hộp, Ly kì',
            time: '100',
            language: 'Tiếng Anh',
            date_show: '27/08/2021'
        },
        {
            id: 'flim03',
            name: 'Shang-Chi Và Huyền Thoại Thập Nhẫn',
            yt_trailler: 'zvfRCIqmvmo',
            link_img: 'https://files.betacorp.vn/files/media%2fimages%2f2021%2f05%2f19%2fshang%2Dchi%2D180439%2D190521%2D28.jpg',
            description: 'Shang-Chi và Huyền Thoại Thập Nhẫn là bộ phim thuộc giai đoạn 4 của Vũ trụ điện ảnh Marvel. Nhân vật này được biết đến như một bậc thầy Kung Fu, tinh thông võ thuật. Sức mạnh của Shang-Chi đến từ hàng ngàn giờ luyện tập miệt mài và sự kỷ luật cao độ với bản thân. Siêu anh hùng võ thuật này được chính bố dạy dỗ để trở thành một sát thủ chuyên nghiệp và kế thừa tập đoàn tội ác của ông.',
            director: 'Destin Daniel Cretton',
            actor: 'Simu Liu, Awkwafina, Tony Chiu-Wai Leung',
            category: 'hành động, Phiêu lưu',
            time: '130',
            language: 'Tieng Anh',
            date_show: '02/09/2021'
        },
        {
            id: 'flim04',
            name: 'Giảu Cứu Nguy',
            yt_trailler: 'zvfRCIqmvmo',
            link_img: 'https://files.betacorp.vn/files/media%2fimages%2f2021%2f05%2f19%2ffree%2Dguy%2D175032%2D190521%2D69.jpg',
            description: 'Guy - Nhân viên giao dịch ngân hàng, phát hiện anh ấy thực chất là người chơi nền trong trò chơi điện tử thế giới mở. Guy quyết định trở thành người anh hùng và viết lại câu chuyện của chính mình. Giờ đây, trong một thế giới không còn giới hạn, anh ấy quyết định trở thành người giải cứu thế giới, theo cách của chính mình.',
            director: 'Shawn Levy',
            actor: 'Ryan Reynolds, Jacksepticeye, Jodie Comer, Joe Keery',
            category: 'Hài hước, Hành động',
            time: '100',
            language: 'Tieng Anh',
            date_show: '11/12/2021'
        }
    ],
    reducers: {

    }
});

const {reducer, actions} = listFlimSlice;

export default reducer;