import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Component, Input, EventEmitter, Output, ElementRef, ViewChildren, forwardRef, ViewChild, Renderer, Directive, ComponentFactoryResolver, ViewContainerRef, Pipe, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EmojiButtonComponent {
    constructor() {
        this.selectionEmitter = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnChanges() { }
}
EmojiButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'emoji-button',
                template: `
    <label [for]="labelFor"
      class="emoji-button" 
      (click)="selectionEmitter.emit(dataToEmit || emoji); $event.preventDefault();"
      (mousedown)="$event.preventDefault()">
      {{emoji[0]}}
    </label>
  `,
                styles: [":host{display:inline-block}.emoji-button{margin:0;padding:0;border:none;outline:0;background:0 0;width:34px;height:34px;border-radius:3px;font-size:24px;line-height:1.1;cursor:pointer;transition:.2s}.emoji-button:focus,.emoji-button:hover{background:#f1f1f1;border-color:#f1f1f1}"]
            }] }
];
/** @nocollapse */
EmojiButtonComponent.ctorParameters = () => [];
EmojiButtonComponent.propDecorators = {
    labelFor: [{ type: Input, args: ['labelFor',] }],
    emoji: [{ type: Input, args: ['emoji',] }],
    dataToEmit: [{ type: Input, args: ['dataToEmit',] }],
    options: [{ type: Input, args: ['options',] }],
    fitzpatrick: [{ type: Input, args: ['fitzpatrick',] }],
    selectionEmitter: [{ type: Output, args: ['selection',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EmojiCategoriesComponent {
    constructor() {
        this.categorySelection = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleCategorySelection(event) {
        this.categorySelection.emit(event);
    }
}
EmojiCategoriesComponent.decorators = [
    { type: Component, args: [{
                selector: 'emoji-categories',
                template: `
  <ng-container *ngFor="let category of emojisCategories">
    <emoji-button 
      [labelFor]="labelFor"
      (selection)="handleCategorySelection($event)"
      [dataToEmit]="category"
      [emoji]="category.icon"></emoji-button>
  </ng-container>
  `,
                styles: [":host{display:flex;flex-wrap:wrap;justify-content:space-between;margin:0 0 10px}"]
            }] }
];
/** @nocollapse */
EmojiCategoriesComponent.ctorParameters = () => [];
EmojiCategoriesComponent.propDecorators = {
    labelFor: [{ type: Input, args: ['labelFor',] }],
    emojisCategories: [{ type: Input, args: ['emojisCategories',] }],
    categorySelection: [{ type: Output, args: ['categorySelection',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EmojiCategoryComponent {
    /**
     * @param {?} _element
     */
    constructor(_element) {
        this._element = _element;
    }
    /**
     * @return {?}
     */
    scrollIntoView() {
        this._element.nativeElement.scrollIntoView();
    }
}
EmojiCategoryComponent.decorators = [
    { type: Component, args: [{
                selector: 'emoji-category',
                template: `
  <p class="emoji-category">{{category.name}}</p>
  `,
                styles: [".emoji-category{margin:0;font-size:16px;padding:5px 0 5px 5px;border-bottom:1px solid #f0f0f0;color:#777;font-family:Arial,\"Arial Black\",Tahoma,\"Trebuchet MS\",Verdana}"]
            }] }
];
/** @nocollapse */
EmojiCategoryComponent.ctorParameters = () => [
    { type: ElementRef }
];
EmojiCategoryComponent.propDecorators = {
    category: [{ type: Input, args: ['category',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EMOJIS = [
    {
        emojis: [
            ['😀', 'grinning'],
            ['😃', 'smiley'],
            ['😄', 'smile'],
            ['😁', 'grin'],
            ['😆', 'laughing'],
            ['😅', 'sweat_smile'],
            ['😂', 'joy'],
            ['🤣', 'rofl'],
            ['😊', 'blush'],
            ['😇', 'innocent'],
            ['🙂', 'slightly_smiling_face'],
            ['🙃', 'upside_down_face'],
            ['😉', 'wink'],
            ['😌', 'relieved'],
            ['😍', 'heart_eyes'],
            ['😘', 'kissing_heart'],
            ['😗', 'kissing'],
            ['😙', 'kissing_smiling_eyes'],
            ['😚', 'kissing_closed_eyes'],
            ['😋', 'yum'],
            ['😜', 'stuck_out_tongue_winking_eye'],
            ['😝', 'stuck_out_tongue_closed_eyes'],
            ['😛', 'stuck_out_tongue'],
            ['🤑', 'money_mouth_face'],
            ['🤗', 'hugs'],
            ['🤓', 'nerd_face'],
            ['😎', 'sunglasses'],
            ['🤡', 'clown_face'],
            ['🤠', 'cowboy_hat_face'],
            ['😏', 'smirk'],
            ['😒', 'unamused'],
            ['😞', 'disappointed'],
            ['😔', 'pensive'],
            ['😟', 'worried'],
            ['😕', 'confused'],
            ['🙁', 'slightly_frowning_face'],
            ['☹️', 'frowning_face'],
            ['😣', 'persevere'],
            ['😖', 'confounded'],
            ['😫', 'tired_face'],
            ['😩', 'weary'],
            ['😤', 'triumph'],
            ['😠', 'angry'],
            ['😡', 'rage'],
            ['😶', 'no_mouth'],
            ['😐', 'neutral_face'],
            ['😑', 'expressionless'],
            ['😯', 'hushed'],
            ['😦', 'frowning'],
            ['😧', 'anguished'],
            ['😮', 'open_mouth'],
            ['😲', 'astonished'],
            ['😵', 'dizzy_face'],
            ['😳', 'flushed'],
            ['😱', 'scream'],
            ['😨', 'fearful'],
            ['😰', 'cold_sweat'],
            ['😢', 'cry'],
            ['😥', 'disappointed_relieved'],
            ['🤤', 'drooling_face'],
            ['😭', 'sob'],
            ['😓', 'sweat'],
            ['😪', 'sleepy'],
            ['😴', 'sleeping'],
            ['🙄', 'roll_eyes'],
            ['🤔', 'thinking'],
            ['🤥', 'lying_face'],
            ['😬', 'grimacing'],
            ['🤐', 'zipper_mouth_face'],
            ['🤢', 'nauseated_face'],
            ['🤧', 'sneezing_face'],
            ['😷', 'mask'],
            ['🤒', 'face_with_thermometer'],
            ['🤕', 'face_with_head_bandage'],
            ['😈', 'smiling_imp'],
            ['👿', 'imp'],
            ['👹', 'japanese_ogre'],
            ['👺', 'japanese_goblin'],
            ['💩', 'hankey'],
            ['👻', 'ghost'],
            ['💀', 'skull'],
            ['☠️', 'skull_and_crossbones'],
            ['👽', 'alien'],
            ['👾', 'space_invader'],
            ['🤖', 'robot'],
            ['🎃', 'jack_o_lantern'],
            ['😺', 'smiley_cat'],
            ['😸', 'smile_cat'],
            ['😹', 'joy_cat'],
            ['😻', 'heart_eyes_cat'],
            ['😼', 'smirk_cat'],
            ['😽', 'kissing_cat'],
            ['🙀', 'scream_cat'],
            ['😿', 'crying_cat_face'],
            ['😾', 'pouting_cat'],
            ['👐', 'open_hands'],
            ['🙌', 'raised_hands'],
            ['👏', 'clap'],
            ['🙏', 'pray'],
            ['🤝', 'handshake'],
            ['👍', '+1'],
            ['👎', '-1'],
            ['👊', 'fist_oncoming'],
            ['✊', 'fist_raised'],
            ['🤛', 'fist_left'],
            ['🤜', 'fist_right'],
            ['🤞', 'crossed_fingers'],
            ['✌️', 'v'],
            ['🤘', 'metal'],
            ['👌', 'ok_hand'],
            ['👈', 'point_left'],
            ['👉', 'point_right'],
            ['👆', 'point_up_2'],
            ['👇', 'point_down'],
            ['☝️', 'point_up'],
            ['✋', 'hand'],
            ['🤚', 'raised_back_of_hand'],
            ['🖐', 'raised_hand_with_fingers_splayed'],
            ['🖖', 'vulcan_salute'],
            ['👋', 'wave'],
            ['🤙', 'call_me_hand'],
            ['💪', 'muscle'],
            ['🖕', 'middle_finger'],
            ['✍️', 'writing_hand'],
            ['🤳', 'selfie'],
            ['💅', 'nail_care'],
            ['💍', 'ring'],
            ['💄', 'lipstick'],
            ['💋', 'kiss'],
            ['👄', 'lips'],
            ['👅', 'tongue'],
            ['👂', 'ear'],
            ['👃', 'nose'],
            ['👣', 'footprints'],
            ['👁', 'eye'],
            ['👀', 'eyes'],
            ['🗣', 'speaking_head'],
            ['👤', 'bust_in_silhouette'],
            ['👥', 'busts_in_silhouette'],
            ['👶', 'baby'],
            ['👦', 'boy'],
            ['👧', 'girl'],
            ['👨', 'man'],
            ['👩', 'woman'],
            ['👱‍♀', 'blonde_woman'],
            ['👱', 'blonde_man'],
            ['👴', 'older_man'],
            ['👵', 'older_woman'],
            ['👲', 'man_with_gua_pi_mao'],
            ['👳‍♀', 'woman_with_turban'],
            ['👳', 'man_with_turban'],
            ['👮‍♀', 'policewoman'],
            ['👮', 'policeman'],
            ['👷‍♀', 'construction_worker_woman'],
            ['👷', 'construction_worker_man'],
            ['💂‍♀', 'guardswoman'],
            ['💂', 'guardsman'],
            ['🕵️‍♀️', 'female_detective'],
            ['🕵', 'male_detective'],
            ['👩‍⚕', 'woman_health_worker'],
            ['👨‍⚕', 'man_health_worker'],
            ['👩‍🌾', 'woman_farmer'],
            ['👨‍🌾', 'man_farmer'],
            ['👩‍🍳', 'woman_cook'],
            ['👨‍🍳', 'man_cook'],
            ['👩‍🎓', 'woman_student'],
            ['👨‍🎓', 'man_student'],
            ['👩‍🎤', 'woman_singer'],
            ['👨‍🎤', 'man_singer'],
            ['👩‍🏫', 'woman_teacher'],
            ['👨‍🏫', 'man_teacher'],
            ['👩‍🏭', 'woman_factory_worker'],
            ['👨‍🏭', 'man_factory_worker'],
            ['👩‍💻', 'woman_technologist'],
            ['👨‍💻', 'man_technologist'],
            ['👩‍💼', 'woman_office_worker'],
            ['👨‍💼', 'man_office_worker'],
            ['👩‍🔧', 'woman_mechanic'],
            ['👨‍🔧', 'man_mechanic'],
            ['👩‍🔬', 'woman_scientist'],
            ['👨‍🔬', 'man_scientist'],
            ['👩‍🎨', 'woman_artist'],
            ['👨‍🎨', 'man_artist'],
            ['👩‍🚒', 'woman_firefighter'],
            ['👨‍🚒', 'man_firefighter'],
            ['👩‍✈', 'woman_pilot'],
            ['👨‍✈', 'man_pilot'],
            ['👩‍🚀', 'woman_astronaut'],
            ['👨‍🚀', 'man_astronaut'],
            ['👩‍⚖', 'woman_judge'],
            ['👨‍⚖', 'man_judge'],
            ['🤶', 'mrs_claus'],
            ['🎅', 'santa'],
            ['👸', 'princess'],
            ['🤴', 'prince'],
            ['👰', 'bride_with_veil'],
            ['🤵', 'man_in_tuxedo'],
            ['👼', 'angel'],
            ['🤰', 'pregnant_woman'],
            ['🙇‍♀', 'bowing_woman'],
            ['🙇', 'bowing_man'],
            ['💁', 'tipping_hand_woman'],
            ['💁‍♂', 'tipping_hand_man'],
            ['🙅', 'no_good_woman'],
            ['🙅‍♂', 'no_good_man'],
            ['🙆', 'ok_woman'],
            ['🙆‍♂', 'ok_man'],
            ['🙋', 'raising_hand_woman'],
            ['🙋‍♂', 'raising_hand_man'],
            ['🤦‍♀', 'woman_facepalming'],
            ['🤦‍♂', 'man_facepalming'],
            ['🤷‍♀', 'woman_shrugging'],
            ['🤷‍♂', 'man_shrugging'],
            ['🙎', 'pouting_woman'],
            ['🙎‍♂', 'pouting_man'],
            ['🙍', 'frowning_woman'],
            ['🙍‍♂', 'frowning_man'],
            ['💇', 'haircut_woman'],
            ['💇‍♂', 'haircut_man'],
            ['💆', 'massage_woman'],
            ['💆‍♂', 'massage_man'],
            ['🕴', 'business_suit_levitating'],
            ['💃', 'dancer'],
            ['🕺', 'man_dancing'],
            ['👯', 'dancing_women'],
            ['👯‍♂', 'dancing_men'],
            ['🚶‍♀', 'walking_woman'],
            ['🚶', 'walking_man'],
            ['🏃‍♀', 'running_woman'],
            ['🏃', 'running_man'],
            ['👫', 'couple'],
            ['👭', 'two_women_holding_hands'],
            ['👬', 'two_men_holding_hands'],
            ['💑', 'couple_with_heart_woman_man'],
            ['👩‍❤️‍👩', 'couple_with_heart_woman_woman'],
            ['👨‍❤️‍👨', 'couple_with_heart_man_man'],
            ['💏', 'couplekiss_man_woman'],
            ['👩‍❤️‍💋‍👩', 'couplekiss_woman_woman'],
            ['👨‍❤️‍💋‍👨', 'couplekiss_man_man'],
            ['👪', 'family_man_woman_boy'],
            ['👨‍👩‍👧', 'family_man_woman_girl'],
            ['👨‍👩‍👧‍👦', 'family_man_woman_girl_boy'],
            ['👨‍👩‍👦‍👦', 'family_man_woman_boy_boy'],
            ['👨‍👩‍👧‍👧', 'family_man_woman_girl_girl'],
            ['👩‍👩‍👦', 'family_woman_woman_boy'],
            ['👩‍👩‍👧', 'family_woman_woman_girl'],
            ['👩‍👩‍👧‍👦', 'family_woman_woman_girl_boy'],
            ['👩‍👩‍👦‍👦', 'family_woman_woman_boy_boy'],
            ['👩‍👩‍👧‍👧', 'family_woman_woman_girl_girl'],
            ['👨‍👨‍👦', 'family_man_man_boy'],
            ['👨‍👨‍👧', 'family_man_man_girl'],
            ['👨‍👨‍👧‍👦', 'family_man_man_girl_boy'],
            ['👨‍👨‍👦‍👦', 'family_man_man_boy_boy'],
            ['👨‍👨‍👧‍👧', 'family_man_man_girl_girl'],
            ['👩‍👦', 'family_woman_boy'],
            ['👩‍👧', 'family_woman_girl'],
            ['👩‍👧‍👦', 'family_woman_girl_boy'],
            ['👩‍👦‍👦', 'family_woman_boy_boy'],
            ['👩‍👧‍👧', 'family_woman_girl_girl'],
            ['👨‍👦', 'family_man_boy'],
            ['👨‍👧', 'family_man_girl'],
            ['👨‍👧‍👦', 'family_man_girl_boy'],
            ['👨‍👦‍👦', 'family_man_boy_boy'],
            ['👨‍👧‍👧', 'family_man_girl_girl'],
            ['👚', 'womans_clothes'],
            ['👕', 'shirt'],
            ['👖', 'jeans'],
            ['👔', 'necktie'],
            ['👗', 'dress'],
            ['👙', 'bikini'],
            ['👘', 'kimono'],
            ['👠', 'high_heel'],
            ['👡', 'sandal'],
            ['👢', 'boot'],
            ['👞', 'mans_shoe'],
            ['👟', 'athletic_shoe'],
            ['👒', 'womans_hat'],
            ['🎩', 'tophat'],
            ['🎓', 'mortar_board'],
            ['👑', 'crown'],
            ['⛑', 'rescue_worker_helmet'],
            ['🎒', 'school_satchel'],
            ['👝', 'pouch'],
            ['👛', 'purse'],
            ['👜', 'handbag'],
            ['💼', 'briefcase'],
            ['👓', 'eyeglasses'],
            ['🕶', 'dark_sunglasses'],
            ['🌂', 'closed_umbrella'],
            ['☂️', 'open_umbrella']
        ],
        name: 'People',
        icon: ['😄', 'smile']
    },
    {
        emojis: [
            ['🐶', 'dog'],
            ['🐱', 'cat'],
            ['🐭', 'mouse'],
            ['🐹', 'hamster'],
            ['🐰', 'rabbit'],
            ['🦊', 'fox_face'],
            ['🐻', 'bear'],
            ['🐼', 'panda_face'],
            ['🐨', 'koala'],
            ['🐯', 'tiger'],
            ['🦁', 'lion'],
            ['🐮', 'cow'],
            ['🐷', 'pig'],
            ['🐽', 'pig_nose'],
            ['🐸', 'frog'],
            ['🐵', 'monkey_face'],
            ['🙈', 'see_no_evil'],
            ['🙉', 'hear_no_evil'],
            ['🙊', 'speak_no_evil'],
            ['🐒', 'monkey'],
            ['🐔', 'chicken'],
            ['🐧', 'penguin'],
            ['🐦', 'bird'],
            ['🐤', 'baby_chick'],
            ['🐣', 'hatching_chick'],
            ['🐥', 'hatched_chick'],
            ['🦆', 'duck'],
            ['🦅', 'eagle'],
            ['🦉', 'owl'],
            ['🦇', 'bat'],
            ['🐺', 'wolf'],
            ['🐗', 'boar'],
            ['🐴', 'horse'],
            ['🦄', 'unicorn'],
            ['🐝', 'bee'],
            ['🐛', 'bug'],
            ['🦋', 'butterfly'],
            ['🐌', 'snail'],
            ['🐚', 'shell'],
            ['🐞', 'beetle'],
            ['🐜', 'ant'],
            ['🕷', 'spider'],
            ['🕸', 'spider_web'],
            ['🐢', 'turtle'],
            ['🐍', 'snake'],
            ['🦎', 'lizard'],
            ['🦂', 'scorpion'],
            ['🦀', 'crab'],
            ['🦑', 'squid'],
            ['🐙', 'octopus'],
            ['🦐', 'shrimp'],
            ['🐠', 'tropical_fish'],
            ['🐟', 'fish'],
            ['🐡', 'blowfish'],
            ['🐬', 'dolphin'],
            ['🦈', 'shark'],
            ['🐳', 'whale'],
            ['🐋', 'whale2'],
            ['🐊', 'crocodile'],
            ['🐆', 'leopard'],
            ['🐅', 'tiger2'],
            ['🐃', 'water_buffalo'],
            ['🐂', 'ox'],
            ['🐄', 'cow2'],
            ['🦌', 'deer'],
            ['🐪', 'dromedary_camel'],
            ['🐫', 'camel'],
            ['🐘', 'elephant'],
            ['🦏', 'rhinoceros'],
            ['🦍', 'gorilla'],
            ['🐎', 'racehorse'],
            ['🐖', 'pig2'],
            ['🐐', 'goat'],
            ['🐏', 'ram'],
            ['🐑', 'sheep'],
            ['🐕', 'dog2'],
            ['🐩', 'poodle'],
            ['🐈', 'cat2'],
            ['🐓', 'rooster'],
            ['🦃', 'turkey'],
            ['🕊', 'dove'],
            ['🐇', 'rabbit2'],
            ['🐁', 'mouse2'],
            ['🐀', 'rat'],
            ['🐿', 'chipmunk'],
            ['🐾', 'feet'],
            ['🐉', 'dragon'],
            ['🐲', 'dragon_face'],
            ['🌵', 'cactus'],
            ['🎄', 'christmas_tree'],
            ['🌲', 'evergreen_tree'],
            ['🌳', 'deciduous_tree'],
            ['🌴', 'palm_tree'],
            ['🌱', 'seedling'],
            ['🌿', 'herb'],
            ['☘️', 'shamrock'],
            ['🍀', 'four_leaf_clover'],
            ['🎍', 'bamboo'],
            ['🎋', 'tanabata_tree'],
            ['🍃', 'leaves'],
            ['🍂', 'fallen_leaf'],
            ['🍁', 'maple_leaf'],
            ['🍄', 'mushroom'],
            ['🌾', 'ear_of_rice'],
            ['💐', 'bouquet'],
            ['🌷', 'tulip'],
            ['🌹', 'rose'],
            ['🥀', 'wilted_flower'],
            ['🌻', 'sunflower'],
            ['🌼', 'blossom'],
            ['🌸', 'cherry_blossom'],
            ['🌺', 'hibiscus'],
            ['🌎', 'earth_americas'],
            ['🌍', 'earth_africa'],
            ['🌏', 'earth_asia'],
            ['🌕', 'full_moon'],
            ['🌖', 'waning_gibbous_moon'],
            ['🌗', 'last_quarter_moon'],
            ['🌘', 'waning_crescent_moon'],
            ['🌑', 'new_moon'],
            ['🌒', 'waxing_crescent_moon'],
            ['🌓', 'first_quarter_moon'],
            ['🌔', 'moon'],
            ['🌚', 'new_moon_with_face'],
            ['🌝', 'full_moon_with_face'],
            ['🌞', 'sun_with_face'],
            ['🌛', 'first_quarter_moon_with_face'],
            ['🌜', 'last_quarter_moon_with_face'],
            ['🌙', 'crescent_moon'],
            ['💫', 'dizzy'],
            ['⭐️', 'star'],
            ['🌟', 'star2'],
            ['✨', 'sparkles'],
            ['⚡️', 'zap'],
            ['🔥', 'fire'],
            ['💥', 'boom'],
            ['☄', 'comet'],
            ['☀️', 'sunny'],
            ['🌤', 'sun_behind_small_cloud'],
            ['⛅️', 'partly_sunny'],
            ['🌥', 'sun_behind_large_cloud'],
            ['🌦', 'sun_behind_rain_cloud'],
            ['🌈', 'rainbow'],
            ['☁️', 'cloud'],
            ['🌧', 'cloud_with_rain'],
            ['⛈', 'cloud_with_lightning_and_rain'],
            ['🌩', 'cloud_with_lightning'],
            ['🌨', 'cloud_with_snow'],
            ['☃️', 'snowman_with_snow'],
            ['⛄️', 'snowman'],
            ['❄️', 'snowflake'],
            ['🌬', 'wind_face'],
            ['💨', 'dash'],
            ['🌪', 'tornado'],
            ['🌫', 'fog'],
            ['🌊', 'ocean'],
            ['💧', 'droplet'],
            ['💦', 'sweat_drops'],
            ['☔️', 'umbrella']
        ],
        name: 'Nature',
        icon: ['🌸', 'cherry_blossom']
    },
    {
        emojis: [
            ['🍏', 'green_apple'],
            ['🍎', 'apple'],
            ['🍐', 'pear'],
            ['🍊', 'tangerine'],
            ['🍋', 'lemon'],
            ['🍌', 'banana'],
            ['🍉', 'watermelon'],
            ['🍇', 'grapes'],
            ['🍓', 'strawberry'],
            ['🍈', 'melon'],
            ['🍒', 'cherries'],
            ['🍑', 'peach'],
            ['🍍', 'pineapple'],
            ['🥝', 'kiwi_fruit'],
            ['🥑', 'avocado'],
            ['🍅', 'tomato'],
            ['🍆', 'eggplant'],
            ['🥒', 'cucumber'],
            ['🥕', 'carrot'],
            ['🌽', 'corn'],
            ['🌶', 'hot_pepper'],
            ['🥔', 'potato'],
            ['🍠', 'sweet_potato'],
            ['🌰', 'chestnut'],
            ['🥜', 'peanuts'],
            ['🍯', 'honey_pot'],
            ['🥐', 'croissant'],
            ['🍞', 'bread'],
            ['🥖', 'baguette_bread'],
            ['🧀', 'cheese'],
            ['🥚', 'egg'],
            ['🍳', 'fried_egg'],
            ['🥓', 'bacon'],
            ['🥞', 'pancakes'],
            ['🍤', 'fried_shrimp'],
            ['🍗', 'poultry_leg'],
            ['🍖', 'meat_on_bone'],
            ['🍕', 'pizza'],
            ['🌭', 'hotdog'],
            ['🍔', 'hamburger'],
            ['🍟', 'fries'],
            ['🥙', 'stuffed_flatbread'],
            ['🌮', 'taco'],
            ['🌯', 'burrito'],
            ['🥗', 'green_salad'],
            ['🥘', 'shallow_pan_of_food'],
            ['🍝', 'spaghetti'],
            ['🍜', 'ramen'],
            ['🍲', 'stew'],
            ['🍥', 'fish_cake'],
            ['🍣', 'sushi'],
            ['🍱', 'bento'],
            ['🍛', 'curry'],
            ['🍚', 'rice'],
            ['🍙', 'rice_ball'],
            ['🍘', 'rice_cracker'],
            ['🍢', 'oden'],
            ['🍡', 'dango'],
            ['🍧', 'shaved_ice'],
            ['🍨', 'ice_cream'],
            ['🍦', 'icecream'],
            ['🍰', 'cake'],
            ['🎂', 'birthday'],
            ['🍮', 'custard'],
            ['🍭', 'lollipop'],
            ['🍬', 'candy'],
            ['🍫', 'chocolate_bar'],
            ['🍿', 'popcorn'],
            ['🍩', 'doughnut'],
            ['🍪', 'cookie'],
            ['🥛', 'milk_glass'],
            ['🍼', 'baby_bottle'],
            ['☕️', 'coffee'],
            ['🍵', 'tea'],
            ['🍶', 'sake'],
            ['🍺', 'beer'],
            ['🍻', 'beers'],
            ['🥂', 'clinking_glasses'],
            ['🍷', 'wine_glass'],
            ['🥃', 'tumbler_glass'],
            ['🍸', 'cocktail'],
            ['🍹', 'tropical_drink'],
            ['🍾', 'champagne'],
            ['🥄', 'spoon'],
            ['🍴', 'fork_and_knife'],
            ['🍽', 'plate_with_cutlery']
        ],
        name: 'Foods',
        icon: ['🍔', 'hamburger']
    },
    {
        emojis: [
            ['⚽️', 'soccer'],
            ['🏀', 'basketball'],
            ['🏈', 'football'],
            ['⚾️', 'baseball'],
            ['🎾', 'tennis'],
            ['🏐', 'volleyball'],
            ['🏉', 'rugby_football'],
            ['🎱', '8ball'],
            ['🏓', 'ping_pong'],
            ['🏸', 'badminton'],
            ['🥅', 'goal_net'],
            ['🏒', 'ice_hockey'],
            ['🏑', 'field_hockey'],
            ['🏏', 'cricket'],
            ['⛳️', 'golf'],
            ['🏹', 'bow_and_arrow'],
            ['🎣', 'fishing_pole_and_fish'],
            ['🥊', 'boxing_glove'],
            ['🥋', 'martial_arts_uniform'],
            ['⛸', 'ice_skate'],
            ['🎿', 'ski'],
            ['⛷', 'skier'],
            ['🏂', 'snowboarder'],
            ['🏋️‍♀️', 'weight_lifting_woman'],
            ['🏋', 'weight_lifting_man'],
            ['🤺', 'person_fencing'],
            ['🤼‍♀', 'women_wrestling'],
            ['🤼‍♂', 'men_wrestling'],
            ['🤸‍♀', 'woman_cartwheeling'],
            ['🤸‍♂', 'man_cartwheeling'],
            ['⛹️‍♀️', 'basketball_woman'],
            ['⛹', 'basketball_man'],
            ['🤾‍♀', 'woman_playing_handball'],
            ['🤾‍♂', 'man_playing_handball'],
            ['🏌️‍♀️', 'golfing_woman'],
            ['🏌', 'golfing_man'],
            ['🏄‍♀', 'surfing_woman'],
            ['🏄', 'surfing_man'],
            ['🏊‍♀', 'swimming_woman'],
            ['🏊', 'swimming_man'],
            ['🤽‍♀', 'woman_playing_water_polo'],
            ['🤽‍♂', 'man_playing_water_polo'],
            ['🚣‍♀', 'rowing_woman'],
            ['🚣', 'rowing_man'],
            ['🏇', 'horse_racing'],
            ['🚴‍♀', 'biking_woman'],
            ['🚴', 'biking_man'],
            ['🚵‍♀', 'mountain_biking_woman'],
            ['🚵', 'mountain_biking_man'],
            ['🎽', 'running_shirt_with_sash'],
            ['🏅', 'medal_sports'],
            ['🎖', 'medal_military'],
            ['🥇', '1st_place_medal'],
            ['🥈', '2nd_place_medal'],
            ['🥉', '3rd_place_medal'],
            ['🏆', 'trophy'],
            ['🏵', 'rosette'],
            ['🎗', 'reminder_ribbon'],
            ['🎫', 'ticket'],
            ['🎟', 'tickets'],
            ['🎪', 'circus_tent'],
            ['🤹‍♀', 'woman_juggling'],
            ['🤹‍♂', 'man_juggling'],
            ['🎭', 'performing_arts'],
            ['🎨', 'art'],
            ['🎬', 'clapper'],
            ['🎤', 'microphone'],
            ['🎧', 'headphones'],
            ['🎼', 'musical_score'],
            ['🎹', 'musical_keyboard'],
            ['🥁', 'drum'],
            ['🎷', 'saxophone'],
            ['🎺', 'trumpet'],
            ['🎸', 'guitar'],
            ['🎻', 'violin'],
            ['🎲', 'game_die'],
            ['🎯', 'dart'],
            ['🎳', 'bowling'],
            ['🎮', 'video_game'],
            ['🎰', 'slot_machine']
        ],
        name: 'Activity',
        icon: ['⚽️', 'soccer']
    },
    {
        emojis: [
            ['🚗', 'car'],
            ['🚕', 'taxi'],
            ['🚙', 'blue_car'],
            ['🚌', 'bus'],
            ['🚎', 'trolleybus'],
            ['🏎', 'racing_car'],
            ['🚓', 'police_car'],
            ['🚑', 'ambulance'],
            ['🚒', 'fire_engine'],
            ['🚐', 'minibus'],
            ['🚚', 'truck'],
            ['🚛', 'articulated_lorry'],
            ['🚜', 'tractor'],
            ['🛴', 'kick_scooter'],
            ['🚲', 'bike'],
            ['🛵', 'motor_scooter'],
            ['🏍', 'motorcycle'],
            ['🚨', 'rotating_light'],
            ['🚔', 'oncoming_police_car'],
            ['🚍', 'oncoming_bus'],
            ['🚘', 'oncoming_automobile'],
            ['🚖', 'oncoming_taxi'],
            ['🚡', 'aerial_tramway'],
            ['🚠', 'mountain_cableway'],
            ['🚟', 'suspension_railway'],
            ['🚃', 'railway_car'],
            ['🚋', 'train'],
            ['🚞', 'mountain_railway'],
            ['🚝', 'monorail'],
            ['🚄', 'bullettrain_side'],
            ['🚅', 'bullettrain_front'],
            ['🚈', 'light_rail'],
            ['🚂', 'steam_locomotive'],
            ['🚆', 'train2'],
            ['🚇', 'metro'],
            ['🚊', 'tram'],
            ['🚉', 'station'],
            ['🚁', 'helicopter'],
            ['🛩', 'small_airplane'],
            ['✈️', 'airplane'],
            ['🛫', 'flight_departure'],
            ['🛬', 'flight_arrival'],
            ['🚀', 'rocket'],
            ['🛰', 'artificial_satellite'],
            ['💺', 'seat'],
            ['🛶', 'canoe'],
            ['⛵️', 'boat'],
            ['🛥', 'motor_boat'],
            ['🚤', 'speedboat'],
            ['🛳', 'passenger_ship'],
            ['⛴', 'ferry'],
            ['🚢', 'ship'],
            ['⚓️', 'anchor'],
            ['🚧', 'construction'],
            ['⛽️', 'fuelpump'],
            ['🚏', 'busstop'],
            ['🚦', 'vertical_traffic_light'],
            ['🚥', 'traffic_light'],
            ['🗺', 'world_map'],
            ['🗿', 'moyai'],
            ['🗽', 'statue_of_liberty'],
            ['⛲️', 'fountain'],
            ['🗼', 'tokyo_tower'],
            ['🏰', 'european_castle'],
            ['🏯', 'japanese_castle'],
            ['🏟', 'stadium'],
            ['🎡', 'ferris_wheel'],
            ['🎢', 'roller_coaster'],
            ['🎠', 'carousel_horse'],
            ['⛱', 'parasol_on_ground'],
            ['🏖', 'beach_umbrella'],
            ['🏝', 'desert_island'],
            ['⛰', 'mountain'],
            ['🏔', 'mountain_snow'],
            ['🗻', 'mount_fuji'],
            ['🌋', 'volcano'],
            ['🏜', 'desert'],
            ['🏕', 'camping'],
            ['⛺️', 'tent'],
            ['🛤', 'railway_track'],
            ['🛣', 'motorway'],
            ['🏗', 'building_construction'],
            ['🏭', 'factory'],
            ['🏠', 'house'],
            ['🏡', 'house_with_garden'],
            ['🏘', 'houses'],
            ['🏚', 'derelict_house'],
            ['🏢', 'office'],
            ['🏬', 'department_store'],
            ['🏣', 'post_office'],
            ['🏤', 'european_post_office'],
            ['🏥', 'hospital'],
            ['🏦', 'bank'],
            ['🏨', 'hotel'],
            ['🏪', 'convenience_store'],
            ['🏫', 'school'],
            ['🏩', 'love_hotel'],
            ['💒', 'wedding'],
            ['🏛', 'classical_building'],
            ['⛪️', 'church'],
            ['🕌', 'mosque'],
            ['🕍', 'synagogue'],
            ['🕋', 'kaaba'],
            ['⛩', 'shinto_shrine'],
            ['🗾', 'japan'],
            ['🎑', 'rice_scene'],
            ['🏞', 'national_park'],
            ['🌅', 'sunrise'],
            ['🌄', 'sunrise_over_mountains'],
            ['🌠', 'stars'],
            ['🎇', 'sparkler'],
            ['🎆', 'fireworks'],
            ['🌇', 'city_sunrise'],
            ['🌆', 'city_sunset'],
            ['🏙', 'cityscape'],
            ['🌃', 'night_with_stars'],
            ['🌌', 'milky_way'],
            ['🌉', 'bridge_at_night'],
            ['🌁', 'foggy']
        ],
        name: 'Places',
        icon: ['🚗', 'car']
    },
    {
        emojis: [
            ['⌚️', 'watch'],
            ['📱', 'iphone'],
            ['📲', 'calling'],
            ['💻', 'computer'],
            ['⌨️', 'keyboard'],
            ['🖥', 'desktop_computer'],
            ['🖨', 'printer'],
            ['🖱', 'computer_mouse'],
            ['🖲', 'trackball'],
            ['🕹', 'joystick'],
            ['🗜', 'clamp'],
            ['💽', 'minidisc'],
            ['💾', 'floppy_disk'],
            ['💿', 'cd'],
            ['📀', 'dvd'],
            ['📼', 'vhs'],
            ['📷', 'camera'],
            ['📸', 'camera_flash'],
            ['📹', 'video_camera'],
            ['🎥', 'movie_camera'],
            ['📽', 'film_projector'],
            ['🎞', 'film_strip'],
            ['📞', 'telephone_receiver'],
            ['☎️', 'phone'],
            ['📟', 'pager'],
            ['📠', 'fax'],
            ['📺', 'tv'],
            ['📻', 'radio'],
            ['🎙', 'studio_microphone'],
            ['🎚', 'level_slider'],
            ['🎛', 'control_knobs'],
            ['⏱', 'stopwatch'],
            ['⏲', 'timer_clock'],
            ['⏰', 'alarm_clock'],
            ['🕰', 'mantelpiece_clock'],
            ['⌛️', 'hourglass'],
            ['⏳', 'hourglass_flowing_sand'],
            ['📡', 'satellite'],
            ['🔋', 'battery'],
            ['🔌', 'electric_plug'],
            ['💡', 'bulb'],
            ['🔦', 'flashlight'],
            ['🕯', 'candle'],
            ['🗑', 'wastebasket'],
            ['🛢', 'oil_drum'],
            ['💸', 'money_with_wings'],
            ['💵', 'dollar'],
            ['💴', 'yen'],
            ['💶', 'euro'],
            ['💷', 'pound'],
            ['💰', 'moneybag'],
            ['💳', 'credit_card'],
            ['💎', 'gem'],
            ['⚖️', 'balance_scale'],
            ['🔧', 'wrench'],
            ['🔨', 'hammer'],
            ['⚒', 'hammer_and_pick'],
            ['🛠', 'hammer_and_wrench'],
            ['⛏', 'pick'],
            ['🔩', 'nut_and_bolt'],
            ['⚙️', 'gear'],
            ['⛓', 'chains'],
            ['🔫', 'gun'],
            ['💣', 'bomb'],
            ['🔪', 'hocho'],
            ['🗡', 'dagger'],
            ['⚔️', 'crossed_swords'],
            ['🛡', 'shield'],
            ['🚬', 'smoking'],
            ['⚰️', 'coffin'],
            ['⚱️', 'funeral_urn'],
            ['🏺', 'amphora'],
            ['🔮', 'crystal_ball'],
            ['📿', 'prayer_beads'],
            ['💈', 'barber'],
            ['⚗️', 'alembic'],
            ['🔭', 'telescope'],
            ['🔬', 'microscope'],
            ['🕳', 'hole'],
            ['💊', 'pill'],
            ['💉', 'syringe'],
            ['🌡', 'thermometer'],
            ['🚽', 'toilet'],
            ['🚰', 'potable_water'],
            ['🚿', 'shower'],
            ['🛁', 'bathtub'],
            ['🛀', 'bath'],
            ['🛎', 'bellhop_bell'],
            ['🔑', 'key'],
            ['🗝', 'old_key'],
            ['🚪', 'door'],
            ['🛋', 'couch_and_lamp'],
            ['🛏', 'bed'],
            ['🛌', 'sleeping_bed'],
            ['🖼', 'framed_picture'],
            ['🛍', 'shopping'],
            ['🛒', 'shopping_cart'],
            ['🎁', 'gift'],
            ['🎈', 'balloon'],
            ['🎏', 'flags'],
            ['🎀', 'ribbon'],
            ['🎊', 'confetti_ball'],
            ['🎉', 'tada'],
            ['🎎', 'dolls'],
            ['🏮', 'izakaya_lantern'],
            ['🎐', 'wind_chime'],
            ['✉️', 'email'],
            ['📩', 'envelope_with_arrow'],
            ['📨', 'incoming_envelope'],
            ['📧', 'e-mail'],
            ['💌', 'love_letter'],
            ['📥', 'inbox_tray'],
            ['📤', 'outbox_tray'],
            ['📦', 'package'],
            ['🏷', 'label'],
            ['📪', 'mailbox_closed'],
            ['📫', 'mailbox'],
            ['📬', 'mailbox_with_mail'],
            ['📭', 'mailbox_with_no_mail'],
            ['📮', 'postbox'],
            ['📯', 'postal_horn'],
            ['📜', 'scroll'],
            ['📃', 'page_with_curl'],
            ['📄', 'page_facing_up'],
            ['📑', 'bookmark_tabs'],
            ['📊', 'bar_chart'],
            ['📈', 'chart_with_upwards_trend'],
            ['📉', 'chart_with_downwards_trend'],
            ['🗒', 'spiral_notepad'],
            ['🗓', 'spiral_calendar'],
            ['📆', 'calendar'],
            ['📅', 'date'],
            ['📇', 'card_index'],
            ['🗃', 'card_file_box'],
            ['🗳', 'ballot_box'],
            ['🗄', 'file_cabinet'],
            ['📋', 'clipboard'],
            ['📁', 'file_folder'],
            ['📂', 'open_file_folder'],
            ['🗂', 'card_index_dividers'],
            ['🗞', 'newspaper_roll'],
            ['📰', 'newspaper'],
            ['📓', 'notebook'],
            ['📔', 'notebook_with_decorative_cover'],
            ['📒', 'ledger'],
            ['📕', 'closed_book'],
            ['📗', 'green_book'],
            ['📘', 'blue_book'],
            ['📙', 'orange_book'],
            ['📚', 'books'],
            ['📖', 'book'],
            ['🔖', 'bookmark'],
            ['🔗', 'link'],
            ['📎', 'paperclip'],
            ['🖇', 'paperclips'],
            ['📐', 'triangular_ruler'],
            ['📏', 'straight_ruler'],
            ['📌', 'pushpin'],
            ['📍', 'round_pushpin'],
            ['✂️', 'scissors'],
            ['🖊', 'pen'],
            ['🖋', 'fountain_pen'],
            ['✒️', 'black_nib'],
            ['🖌', 'paintbrush'],
            ['🖍', 'crayon'],
            ['📝', 'memo'],
            ['✏️', 'pencil2'],
            ['🔍', 'mag'],
            ['🔎', 'mag_right'],
            ['🔏', 'lock_with_ink_pen'],
            ['🔐', 'closed_lock_with_key'],
            ['🔒', 'lock'],
            ['🔓', 'unlock']
        ],
        name: 'Objects',
        icon: ['🔔', 'bell']
    },
    {
        emojis: [
            ['❤️', 'heart'],
            ['💛', 'yellow_heart'],
            ['💚', 'green_heart'],
            ['💙', 'blue_heart'],
            ['💜', 'purple_heart'],
            ['🖤', 'black_heart'],
            ['💔', 'broken_heart'],
            ['❣️', 'heavy_heart_exclamation'],
            ['💕', 'two_hearts'],
            ['💞', 'revolving_hearts'],
            ['💓', 'heartbeat'],
            ['💗', 'heartpulse'],
            ['💖', 'sparkling_heart'],
            ['💘', 'cupid'],
            ['💝', 'gift_heart'],
            ['💟', 'heart_decoration'],
            ['☮️', 'peace_symbol'],
            ['✝️', 'latin_cross'],
            ['☪️', 'star_and_crescent'],
            ['🕉', 'om'],
            ['☸️', 'wheel_of_dharma'],
            ['✡️', 'star_of_david'],
            ['🔯', 'six_pointed_star'],
            ['🕎', 'menorah'],
            ['☯️', 'yin_yang'],
            ['☦️', 'orthodox_cross'],
            ['🛐', 'place_of_worship'],
            ['⛎', 'ophiuchus'],
            ['♈️', 'aries'],
            ['♉️', 'taurus'],
            ['♊️', 'gemini'],
            ['♋️', 'cancer'],
            ['♌️', 'leo'],
            ['♍️', 'virgo'],
            ['♎️', 'libra'],
            ['♏️', 'scorpius'],
            ['♐️', 'sagittarius'],
            ['♑️', 'capricorn'],
            ['♒️', 'aquarius'],
            ['♓️', 'pisces'],
            ['🆔', 'id'],
            ['⚛️', 'atom_symbol'],
            ['🉑', 'accept'],
            ['☢️', 'radioactive'],
            ['☣️', 'biohazard'],
            ['📴', 'mobile_phone_off'],
            ['📳', 'vibration_mode'],
            ['🈶', 'u6709'],
            ['🈚️', 'u7121'],
            ['🈸', 'u7533'],
            ['🈺', 'u55b6'],
            ['🈷️', 'u6708'],
            ['✴️', 'eight_pointed_black_star'],
            ['🆚', 'vs'],
            ['💮', 'white_flower'],
            ['🉐', 'ideograph_advantage'],
            ['㊙️', 'secret'],
            ['㊗️', 'congratulations'],
            ['🈴', 'u5408'],
            ['🈵', 'u6e80'],
            ['🈹', 'u5272'],
            ['🈲', 'u7981'],
            ['🅰️', 'a'],
            ['🅱️', 'b'],
            ['🆎', 'ab'],
            ['🆑', 'cl'],
            ['🅾️', 'o2'],
            ['🆘', 'sos'],
            ['❌', 'x'],
            ['⭕️', 'o'],
            ['🛑', 'stop_sign'],
            ['⛔️', 'no_entry'],
            ['📛', 'name_badge'],
            ['🚫', 'no_entry_sign'],
            ['💯', '100'],
            ['💢', 'anger'],
            ['♨️', 'hotsprings'],
            ['🚷', 'no_pedestrians'],
            ['🚯', 'do_not_litter'],
            ['🚳', 'no_bicycles'],
            ['🚱', 'non-potable_water'],
            ['🔞', 'underage'],
            ['📵', 'no_mobile_phones'],
            ['🚭', 'no_smoking'],
            ['❗️', 'exclamation'],
            ['❕', 'grey_exclamation'],
            ['❓', 'question'],
            ['❔', 'grey_question'],
            ['‼️', 'bangbang'],
            ['⁉️', 'interrobang'],
            ['🔅', 'low_brightness'],
            ['🔆', 'high_brightness'],
            ['〽️', 'part_alternation_mark'],
            ['⚠️', 'warning'],
            ['🚸', 'children_crossing'],
            ['🔱', 'trident'],
            ['⚜️', 'fleur_de_lis'],
            ['🔰', 'beginner'],
            ['♻️', 'recycle'],
            ['✅', 'white_check_mark'],
            ['🈯️', 'u6307'],
            ['💹', 'chart'],
            ['❇️', 'sparkle'],
            ['✳️', 'eight_spoked_asterisk'],
            ['❎', 'negative_squared_cross_mark'],
            ['🌐', 'globe_with_meridians'],
            ['💠', 'diamond_shape_with_a_dot_inside'],
            ['Ⓜ️', 'm'],
            ['🌀', 'cyclone'],
            ['💤', 'zzz'],
            ['🏧', 'atm'],
            ['🚾', 'wc'],
            ['♿️', 'wheelchair'],
            ['🅿️', 'parking'],
            ['🈳', 'u7a7a'],
            ['🈂️', 'sa'],
            ['🛂', 'passport_control'],
            ['🛃', 'customs'],
            ['🛄', 'baggage_claim'],
            ['🛅', 'left_luggage'],
            ['🚹', 'mens'],
            ['🚺', 'womens'],
            ['🚼', 'baby_symbol'],
            ['🚻', 'restroom'],
            ['🚮', 'put_litter_in_its_place'],
            ['🎦', 'cinema'],
            ['📶', 'signal_strength'],
            ['🈁', 'koko'],
            ['🔣', 'symbols'],
            ['ℹ️', 'information_source'],
            ['🔤', 'abc'],
            ['🔡', 'abcd'],
            ['🔠', 'capital_abcd'],
            ['🆖', 'ng'],
            ['🆗', 'ok'],
            ['🆙', 'up'],
            ['🆒', 'cool'],
            ['🆕', 'new'],
            ['🆓', 'free'],
            ['0️⃣', 'zero'],
            ['1️⃣', 'one'],
            ['2️⃣', 'two'],
            ['3️⃣', 'three'],
            ['4️⃣', 'four'],
            ['5️⃣', 'five'],
            ['6️⃣', 'six'],
            ['7️⃣', 'seven'],
            ['8️⃣', 'eight'],
            ['9️⃣', 'nine'],
            ['🔟', 'keycap_ten'],
            ['🔢', '1234'],
            ['#️⃣', 'hash'],
            ['*️⃣', 'asterisk'],
            ['▶️', 'arrow_forward'],
            ['⏸', 'pause_button'],
            ['⏯', 'play_or_pause_button'],
            ['⏹', 'stop_button'],
            ['⏺', 'record_button'],
            ['⏭', 'next_track_button'],
            ['⏮', 'previous_track_button'],
            ['⏩', 'fast_forward'],
            ['⏪', 'rewind'],
            ['⏫', 'arrow_double_up'],
            ['⏬', 'arrow_double_down'],
            ['◀️', 'arrow_backward'],
            ['🔼', 'arrow_up_small'],
            ['🔽', 'arrow_down_small'],
            ['➡️', 'arrow_right'],
            ['⬅️', 'arrow_left'],
            ['⬆️', 'arrow_up'],
            ['⬇️', 'arrow_down'],
            ['↗️', 'arrow_upper_right'],
            ['↘️', 'arrow_lower_right'],
            ['↙️', 'arrow_lower_left'],
            ['↖️', 'arrow_upper_left'],
            ['↕️', 'arrow_up_down'],
            ['↔️', 'left_right_arrow'],
            ['↪️', 'arrow_right_hook'],
            ['↩️', 'leftwards_arrow_with_hook'],
            ['⤴️', 'arrow_heading_up'],
            ['⤵️', 'arrow_heading_down'],
            ['🔀', 'twisted_rightwards_arrows'],
            ['🔁', 'repeat'],
            ['🔂', 'repeat_one'],
            ['🔄', 'arrows_counterclockwise'],
            ['🔃', 'arrows_clockwise'],
            ['🎵', 'musical_note'],
            ['🎶', 'notes'],
            ['➕', 'heavy_plus_sign'],
            ['➖', 'heavy_minus_sign'],
            ['➗', 'heavy_division_sign'],
            ['✖️', 'heavy_multiplication_x'],
            ['💲', 'heavy_dollar_sign'],
            ['💱', 'currency_exchange'],
            ['™️', 'tm'],
            ['©️', 'copyright'],
            ['®️', 'registered'],
            ['〰️', 'wavy_dash'],
            ['➰', 'curly_loop'],
            ['➿', 'loop'],
            ['🔚', 'end'],
            ['🔙', 'back'],
            ['🔛', 'on'],
            ['🔝', 'top'],
            ['🔜', 'soon'],
            ['✔️', 'heavy_check_mark'],
            ['☑️', 'ballot_box_with_check'],
            ['🔘', 'radio_button'],
            ['⚪️', 'white_circle'],
            ['⚫️', 'black_circle'],
            ['🔴', 'red_circle'],
            ['🔵', 'large_blue_circle'],
            ['🔺', 'small_red_triangle'],
            ['🔻', 'small_red_triangle_down'],
            ['🔸', 'small_orange_diamond'],
            ['🔹', 'small_blue_diamond'],
            ['🔶', 'large_orange_diamond'],
            ['🔷', 'large_blue_diamond'],
            ['🔳', 'white_square_button'],
            ['🔲', 'black_square_button'],
            ['▪️', 'black_small_square'],
            ['▫️', 'white_small_square'],
            ['◾️', 'black_medium_small_square'],
            ['◽️', 'white_medium_small_square'],
            ['◼️', 'black_medium_square'],
            ['◻️', 'white_medium_square'],
            ['⬛️', 'black_large_square'],
            ['⬜️', 'white_large_square'],
            ['🔈', 'speaker'],
            ['🔇', 'mute'],
            ['🔉', 'sound'],
            ['🔊', 'loud_sound'],
            ['🔔', 'bell'],
            ['🔕', 'no_bell'],
            ['📣', 'mega'],
            ['📢', 'loudspeaker'],
            ['👁‍🗨', 'eye_speech_bubble'],
            ['💬', 'speech_balloon'],
            ['💭', 'thought_balloon'],
            ['🗯', 'right_anger_bubble'],
            ['♠️', 'spades'],
            ['♣️', 'clubs'],
            ['♥️', 'hearts'],
            ['♦️', 'diamonds'],
            ['🃏', 'black_joker'],
            ['🎴', 'flower_playing_cards'],
            ['🀄️', 'mahjong'],
            ['🕐', 'clock1'],
            ['🕑', 'clock2'],
            ['🕒', 'clock3'],
            ['🕓', 'clock4'],
            ['🕔', 'clock5'],
            ['🕕', 'clock6'],
            ['🕖', 'clock7'],
            ['🕗', 'clock8'],
            ['🕘', 'clock9'],
            ['🕙', 'clock10'],
            ['🕚', 'clock11'],
            ['🕛', 'clock12'],
            ['🕜', 'clock130'],
            ['🕝', 'clock230'],
            ['🕞', 'clock330'],
            ['🕟', 'clock430'],
            ['🕠', 'clock530'],
            ['🕡', 'clock630'],
            ['🕢', 'clock730'],
            ['🕣', 'clock830'],
            ['🕤', 'clock930'],
            ['🕥', 'clock1030'],
            ['🕦', 'clock1130'],
            ['🕧', 'clock1230']
        ],
        name: 'Symbols',
        icon: ['🔠', 'capital_abcd']
    }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EmojiListComponent {
    constructor() {
        this.emojiSelectionEmitter = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    selectCategory(event) {
        this.emojiCategoryComponents.forEach((/**
         * @param {?} categoryCmp
         * @return {?}
         */
        (categoryCmp) => {
            if (categoryCmp['category'].name === event.name) {
                categoryCmp.scrollIntoView();
            }
        }));
    }
}
EmojiListComponent.decorators = [
    { type: Component, args: [{
                selector: 'emoji-list',
                template: `
  <div class="emoji-list">
    <ng-container *ngFor="let emojiCategory of emojis | notEmptyEmojiCategory">
      <emoji-category [category]="emojiCategory"></emoji-category>
      <div class="emoji-buttons">
        <emoji-button 
        *ngFor="let emoji of emojiCategory.emojis"
        (selection)="emojiSelectionEmitter.emit($event)"
        [emoji]="emoji" [labelFor]="labelFor"></emoji-button>
      </div>
    </ng-container>
  </div>
  `,
                styles: [":host{overflow-y:auto}.emoji-list{padding:0 10px 10px}.emoji-buttons{display:flex;justify-content:center;flex-wrap:wrap;margin:5px 0}"]
            }] }
];
/** @nocollapse */
EmojiListComponent.ctorParameters = () => [];
EmojiListComponent.propDecorators = {
    emojiCategoryComponents: [{ type: ViewChildren, args: [forwardRef((/**
                 * @return {?}
                 */
                () => EmojiCategoryComponent)),] }],
    emojis: [{ type: Input, args: ['emojis',] }],
    labelFor: [{ type: Input, args: ['labelFor',] }],
    emojiSelectionEmitter: [{ type: Output, args: ['emoji-selection',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EmojiContentComponent {
    constructor() {
        this.emojiSelectionEmitter = new EventEmitter();
        this._emojis = EMOJIS;
        this.emojis = this._emojis.slice();
        this.emojisCategories = this._emojis.map((/**
         * @param {?} category
         * @return {?}
         */
        category => Object.assign({}, category, { emojis: [] })));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    searchHandler(value) {
        /** @type {?} */
        let filteredEmojis = this.emojisCategories.map((/**
         * @param {?} category
         * @return {?}
         */
        category => Object.assign({}, category, { emojis: [] })));
        value = value.replace(/-/g, '').toLowerCase();
        Object.keys(this._emojis).forEach((/**
         * @param {?} i
         * @return {?}
         */
        i => {
            /** @type {?} */
            const category = this._emojis[i];
            category.emojis.forEach((/**
             * @param {?} emoji
             * @return {?}
             */
            emoji => {
                if (emoji[1].indexOf(value) !== -1) {
                    filteredEmojis[i].emojis.push(emoji);
                }
            }));
        }));
        this.emojis = filteredEmojis;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    categorySelectionHandler(event) {
        this.emojiListComponent.selectCategory(event);
    }
}
EmojiContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'emoji-content',
                template: `
  <emoji-header 
    [emojisCategories]="emojisCategories"
    (categorySelection)="categorySelectionHandler($event)"
    (search)="searchHandler($event)"
    [labelFor]="labelFor"></emoji-header>
  <emoji-list [labelFor]="labelFor" [emojis]="emojis" (emoji-selection)="emojiSelectionEmitter.emit($event)"></emoji-list>
  <emoji-footer></emoji-footer>
  `,
                styles: [":host{display:flex;flex-direction:column;width:100vw;height:314px;border-radius:3px;background:#fff;text-align:left;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}@media (min-width:258px){:host{width:258px}}emoji-list{flex-grow:1}"]
            }] }
];
/** @nocollapse */
EmojiContentComponent.ctorParameters = () => [];
EmojiContentComponent.propDecorators = {
    emojiListComponent: [{ type: ViewChild, args: [forwardRef((/**
                 * @return {?}
                 */
                () => EmojiListComponent)),] }],
    emojiSelectionEmitter: [{ type: Output, args: ['emoji-selection',] }],
    labelFor: [{ type: Input, args: ['labelFor',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EmojiFooterComponent {
    constructor() { }
}
EmojiFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'emoji-footer',
                template: `
  <footer class="emoji-footer"></footer>
  `,
                styles: [".emoji-footer{display:flex;align-items:center;justify-content:space-between;border-top:1px solid #f9f9f9;border-radius:0 0 3px 3px;padding:10px;background:#fcfcfc}"]
            }] }
];
/** @nocollapse */
EmojiFooterComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EmojiHeaderComponent {
    constructor() {
        this.categorySelection = new EventEmitter();
        this.searchEmitter = new EventEmitter();
    }
}
EmojiHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'emoji-header',
                template: `
  <emoji-categories [labelFor]="labelFor" [emojisCategories]="emojisCategories" (categorySelection)="categorySelection.emit($event)"></emoji-categories>
  <emoji-search (search)="searchEmitter.emit($event)"></emoji-search>
  `,
                styles: [":host{display:block;border-bottom:1px solid #f9f9f9;border-radius:3px 3px 0 0;padding:10px;background:#fcfcfc}"]
            }] }
];
/** @nocollapse */
EmojiHeaderComponent.ctorParameters = () => [];
EmojiHeaderComponent.propDecorators = {
    labelFor: [{ type: Input, args: ['labelFor',] }],
    emojisCategories: [{ type: Input, args: ['emojisCategories',] }],
    categorySelection: [{ type: Output, args: ['categorySelection',] }],
    searchEmitter: [{ type: Output, args: ['search',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EmojiSearchComponent {
    constructor() {
        this.searchEmitter = new EventEmitter();
        this._searchValue = new Subject();
        this._destroyed = new Subject();
        this._searchValue
            .pipe(takeUntil(this._destroyed))
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            this.searchEmitter.emit(value);
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleInputChange(event) {
        this._searchValue.next(event);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroyed.next(true);
    }
}
EmojiSearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'emoji-search',
                template: `
  <input type="text" autocomplete="off" #input (input)="handleInputChange($event.target.value)" placeholder="Search"/>
  `,
                styles: ["input{width:100%;padding:5px 10px;border:1px solid #f0f0f0;outline:0;font-size:14px;font-weight:inherit;box-sizing:border-box}input:focus{border-color:#d7d7d7}"]
            }] }
];
/** @nocollapse */
EmojiSearchComponent.ctorParameters = () => [];
EmojiSearchComponent.propDecorators = {
    searchEmitter: [{ type: Output, args: ['search',] }],
    input: [{ type: ViewChild, args: ['input',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const DIRECTIONS = {
    top: 0,
    bottom: 1,
    left: 2,
    right: 3,
};
DIRECTIONS[DIRECTIONS.top] = 'top';
DIRECTIONS[DIRECTIONS.bottom] = 'bottom';
DIRECTIONS[DIRECTIONS.left] = 'left';
DIRECTIONS[DIRECTIONS.right] = 'right';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EmojiPickerComponent {
    /**
     * @param {?} _renderer
     * @param {?} _el
     */
    constructor(_renderer, _el) {
        this._renderer = _renderer;
        this._el = _el;
        this.selectionEmitter = new EventEmitter();
        this.pickerCloseEmitter = new EventEmitter();
        this._windowResize = new Subject();
        this._destroyed = new Subject();
        this._windowResize
            .pipe(takeUntil(this._destroyed), debounceTime(100))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.setPosition(this._currentTarget, this._currentDirection);
        }));
    }
    /**
     * @param {?} target
     * @param {?=} directionCode
     * @return {?}
     */
    setPosition(target, directionCode = DIRECTIONS.bottom) {
        if (!target) {
            return console.error('Emoji-Picker: positioning failed due to missing target element or direction code');
        }
        this._renderer.setElementStyle(this._el.nativeElement, 'transform', '');
        /** Store anchor and direction */
        this._currentTarget = target;
        this._currentDirection = directionCode;
        /** @type {?} */
        const targetBorders = target.nativeElement.getBoundingClientRect();
        /** @type {?} */
        const thisBorders = this._el.nativeElement.getBoundingClientRect();
        /** @type {?} */
        let heightCorrection = 0;
        /** @type {?} */
        let widthCorrection = 0;
        /** Setting up centering of picker for all cases */
        switch (this._currentDirection) {
            case DIRECTIONS.top:
            case DIRECTIONS.bottom:
                widthCorrection = targetBorders.left - thisBorders.left + (targetBorders.width - thisBorders.width) / 2;
                break;
            case DIRECTIONS.left:
            case DIRECTIONS.right:
                heightCorrection = targetBorders.top - thisBorders.top + (targetBorders.height - thisBorders.height) / 2;
                break;
        }
        /** Setting up relative positioning for all cases */
        switch (this._currentDirection) {
            case DIRECTIONS.top:
                heightCorrection = targetBorders.top - thisBorders.bottom;
                break;
            case DIRECTIONS.left:
                widthCorrection = targetBorders.left - thisBorders.right;
                break;
            case DIRECTIONS.right:
                widthCorrection = targetBorders.right - thisBorders.left;
                break;
            case DIRECTIONS.bottom:
                heightCorrection = targetBorders.bottom - thisBorders.top;
                break;
        }
        /** Correcting positioning due to overflow problems */
        if (thisBorders.bottom + heightCorrection > window.innerHeight) {
            heightCorrection += window.innerHeight - (thisBorders.bottom + heightCorrection);
        }
        if (thisBorders.top + heightCorrection < 0) {
            heightCorrection -= (thisBorders.top + heightCorrection);
        }
        if (thisBorders.right + widthCorrection > window.innerWidth) {
            widthCorrection += window.innerWidth - (thisBorders.right + widthCorrection);
        }
        if (thisBorders.left + widthCorrection < 0) {
            widthCorrection -= (thisBorders.left + widthCorrection);
        }
        /** set the position adjustments to the emoji picker element */
        this._renderer.setElementStyle(this._el.nativeElement, 'transform', `translate(${widthCorrection}px,${heightCorrection}px)`);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onBackground(event) {
        /** internal mousedowns are ignored */
        if (event === this._lastHostMousedownEvent || event.emojiPickerExempt) {
            return;
        }
        this.pickerCloseEmitter.emit(event);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroyed.next(true);
    }
}
EmojiPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'emoji-picker',
                template: `
  <emoji-content [labelFor]="labelFor" (emoji-selection)="selectionEmitter.emit($event)"></emoji-content>
  `,
                host: {
                    '(document:click)': 'onBackground($event)',
                    '(click)': '_lastHostMousedownEvent = $event',
                    '(window:resize)': '_windowResize.next($event)'
                },
                styles: [':host { position: absolute; z-index: 9999; }']
            }] }
];
/** @nocollapse */
EmojiPickerComponent.ctorParameters = () => [
    { type: Renderer },
    { type: ElementRef }
];
EmojiPickerComponent.propDecorators = {
    labelFor: [{ type: Input, args: ['labelFor',] }],
    selectionEmitter: [{ type: Output, args: ['emoji-select',] }],
    pickerCloseEmitter: [{ type: Output, args: ['picker-close',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EmojiEvent {
    /**
     * @param {?} data
     */
    constructor(data) {
        Object.assign(this, data);
    }
    /**
     * @param {?} emojiArray
     * @return {?}
     */
    static fromArray(emojiArray) {
        return new EmojiEvent({ char: emojiArray[0], label: emojiArray[1] });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EmojiPickerApiDirective {
    /**
     * @param {?} _cfr
     * @param {?} _vcr
     * @param {?} _el
     */
    constructor(_cfr, _vcr, _el) {
        this._cfr = _cfr;
        this._vcr = _vcr;
        this._el = _el;
        this._directionCode = DIRECTIONS.bottom;
        this._searchBar = false;
        this.emojiPickerIfEmitter = new EventEmitter();
        this.selectEmitter = new EventEmitter();
        this._emojiPickerOpenState = new Subject();
        this._destroyed = new Subject();
        this._emojiSubs = [];
        this._emojiPickerOpenState
            .pipe(takeUntil(this._destroyed), distinctUntilChanged())
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            if (value) {
                this.openPicker();
            }
            else {
                this.closePicker();
            }
        }));
    }
    /**
     * @param {?} direction
     * @return {?}
     */
    set emojiPickerDirection(direction) {
        if (DIRECTIONS[direction] === undefined) {
            console.error(`Emoji-Picker: direction '${direction}' passed as input does not exist in DIRECTIONS table, defaulting to 'bottom'`);
            this._directionCode = DIRECTIONS.bottom;
        }
        else {
            this._directionCode = DIRECTIONS[direction];
        }
    }
    /**
     * @param {?} condition
     * @return {?}
     */
    set emojiPickerIf(condition) {
        this._emojiPickerOpenState.next(condition);
    }
    /**
     * @return {?}
     */
    openPicker() {
        this._emojiPickerFactory = this._emojiPickerFactory || this._cfr.resolveComponentFactory(EmojiPickerComponent);
        this._emojiPickerRef = this._emojiPickerRef || this._vcr.createComponent(this._emojiPickerFactory);
        this._emojiPickerRef.instance.labelFor = 'chat-input-textarea';
        this._emojiPickerRef.instance.setPosition(this._el, this._directionCode);
        this._emojiSubs.push(this._emojiPickerRef.instance.pickerCloseEmitter.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => this.emojiPickerIfEmitter.emit(false))), this._emojiPickerRef.instance.selectionEmitter.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => this.selectEmitter.emit(EmojiEvent.fromArray(event)))));
    }
    /**
     * @return {?}
     */
    closePicker() {
        if (!this._emojiPickerRef || !this._emojiPickerRef.destroy) {
            return;
        }
        this._emojiSubs.forEach((/**
         * @param {?} subscription
         * @return {?}
         */
        (subscription) => subscription.unsubscribe()));
        this._emojiPickerRef.destroy();
        this._emojiSubs = [];
        delete this._emojiPickerRef;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroyed.next(true);
    }
}
EmojiPickerApiDirective.decorators = [
    { type: Directive, args: [{
                selector: '[emojiPickerIf]',
                host: {
                    '(click)': '$event.emojiPickerExempt = true' // marking off event listening on anchor
                }
            },] }
];
/** @nocollapse */
EmojiPickerApiDirective.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef },
    { type: ElementRef }
];
EmojiPickerApiDirective.propDecorators = {
    emojiPickerDirection: [{ type: Input, args: ['emojiPickerDirection',] }],
    emojiPickerIf: [{ type: Input, args: ['emojiPickerIf',] }],
    emojiPickerIfEmitter: [{ type: Output, args: ['emojiPickerIfChange',] }],
    selectEmitter: [{ type: Output, args: ['emojiPickerSelect',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CaretEvent {
    /**
     * @param {?} data
     */
    constructor(data) {
        Object.assign(this, data);
    }
    /**
     * @return {?}
     */
    clone() {
        return new CaretEvent(Object.assign({}, this, {
            caretRange: this.caretRange && this.caretRange.cloneRange ? this.caretRange.cloneRange() : this.caretRange
        }));
    }
    /**
     * @return {?}
     */
    static generateNullEvent() {
        return new CaretEvent({
            caretOffset: 0,
            textContent: ''
        });
    }
    /**
     * @param {?} r1
     * @param {?} r2
     * @return {?}
     */
    static comparePropsOfObject(r1, r2) {
        for (let k in r1) {
            if (r1[k] !== r2[k]) {
                return false;
            }
        }
        return true;
    }
    /**
     * @param {?} e1
     * @param {?} e2
     * @return {?}
     */
    static compare(e1, e2) {
        /** @type {?} */
        const changed = 
        /** different when either caretRange is omitted while other exists */
        (!e1.caretRange && e2.caretRange) ||
            (e1.caretRange && !e2.caretRange) ||
            /** different when offset has changed */
            (e1.caretOffset !== e2.caretOffset) ||
            /** different when textContent has changed */
            (e1.textContent !== e2.textContent) ||
            /** different when range object properties changed */
            !this.comparePropsOfObject(e1.caretRange, e2.caretRange);
        return !changed;
    }
    /**
     * @param {?} win
     * @param {?} doc
     * @param {?} element
     * @return {?}
     */
    static generateCaretEvent(win, doc, element) {
        /** @type {?} */
        let caretOffset = 0;
        /** @type {?} */
        let sel;
        /** @type {?} */
        let caretRange;
        /** @type {?} */
        let textContent = element.textContent;
        if (element.tagName.toLowerCase() === 'input') {
            return new CaretEvent({
                caretOffset: element.selectionEnd,
                textContent: element.value
            });
        }
        if (typeof win.getSelection != "undefined") {
            sel = win.getSelection();
            if (sel.rangeCount > 0) {
                /** @type {?} */
                const range = win.getSelection().getRangeAt(0);
                /** @type {?} */
                const preCaretRange = range.cloneRange();
                preCaretRange.selectNodeContents(element);
                preCaretRange.setEnd(range.endContainer, range.endOffset);
                caretOffset = preCaretRange.toString().length;
                /** Keeping a reference of the range to emit */
                caretRange = range.cloneRange();
            }
        }
        else if ((sel = doc.selection) && sel.type != "Control") {
            /** @type {?} */
            const textRange = sel.createRange();
            /** @type {?} */
            const preCaretTextRange = doc.body.createTextRange();
            preCaretTextRange.moveToElementText(element);
            preCaretTextRange.setEndPoint("EndToEnd", textRange);
            caretOffset = preCaretTextRange.text.length;
            /** Keeping a reference of the range to emit and making it compatible */
            caretRange = textRange.duplicate();
            caretRange.insertNode = (/**
             * @param {?} e
             * @return {?}
             */
            (e) => {
                /** @type {?} */
                const container = document.createElement("div");
                container.appendChild(e);
                caretRange.pasteHTML(container.innerHTML);
            });
        }
        return new CaretEvent({
            caretOffset,
            caretRange,
            textContent
        });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EmojiPickerCaretDirective {
    /**
     * @param {?} _el
     */
    constructor(_el) {
        this._el = _el;
        this.caretEmitter = new EventEmitter();
        this._caretEvent$ = new Subject();
        this._destroyed$ = new Subject();
        this._lastCaretEvent = CaretEvent.generateNullEvent();
        this._caretEvent$
            .pipe(takeUntil(this._destroyed$), distinctUntilChanged((/**
         * @param {?} event1
         * @param {?} event2
         * @return {?}
         */
        (event1, event2) => {
            return CaretEvent.compare(event1, event2);
        })))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.caretEmitter.emit(event);
            this._lastCaretEvent = event.clone();
        }));
    }
    /**
     * @return {?}
     */
    get doc() {
        if (!this._doc) {
            this._doc = this._el.nativeElement.ownerDocument || this._el.nativeElement.document || document;
        }
        return this._doc;
    }
    /**
     * @return {?}
     */
    get win() {
        if (!this._win) {
            this._win = this.doc.defaultView || this.doc.parentWindow || window;
        }
        return this._win;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this._el.nativeElement.getAttribute('contenteditable') && this._el.nativeElement.tagName.toLowerCase() !== 'input') {
            throw new Error('(emojiPickerPositionEmitter) should only work on contenteditable enabled or input elements');
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroyed$.next(true);
    }
    /**
     * @return {?}
     */
    updateCaretPosition() {
        /** @type {?} */
        const cEvent = CaretEvent.generateCaretEvent(this.win, this.doc, this._el.nativeElement);
        this._caretEvent$.next(cEvent);
    }
    /**
     * @return {?}
     */
    updateCaretDueMutation() {
        /** @type {?} */
        const cEvent = CaretEvent.generateCaretEvent(this.win, this.doc, this._el.nativeElement);
        /** @type {?} */
        let textMovement = cEvent.textContent.length - this._lastCaretEvent.textContent.length;
        cEvent.caretOffset = this._lastCaretEvent.caretOffset + textMovement;
        /** change detection after DOMSubtreeModified event is weird
         * ChangeDetectorRef.detectChanges(), ChangeDetectorRef.markForCheck(), ApplicationRef.tick(), NgZone.run()
         * all of those methods did not work as expected.
         * As a temporary hack I am emitting an event after a short timeout, which is fine due to the _caretEvent$ smart stream
         */
        setTimeout((/**
         * @return {?}
         */
        () => {
            this._caretEvent$.next(cEvent);
        }));
    }
}
EmojiPickerCaretDirective.decorators = [
    { type: Directive, args: [{
                selector: '[emojiPickerCaretEmitter]',
                host: {
                    '(keyup)': 'updateCaretPosition()',
                    '(mouseup)': 'updateCaretPosition()',
                    '(selectstart)': 'updateCaretPosition()',
                    '(focus)': 'updateCaretPosition()',
                    '(DOMSubtreeModified)': 'updateCaretDueMutation($event)'
                }
            },] }
];
/** @nocollapse */
EmojiPickerCaretDirective.ctorParameters = () => [
    { type: ElementRef }
];
EmojiPickerCaretDirective.propDecorators = {
    caretEmitter: [{ type: Output, args: ['emojiPickerCaretEmitter',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EmojiEmptyCategoryPipe {
    /**
     * @param {?} categories
     * @return {?}
     */
    transform(categories) {
        return categories.filter((/**
         * @param {?} category
         * @return {?}
         */
        category => category.emojis.length !== 0));
    }
}
EmojiEmptyCategoryPipe.decorators = [
    { type: Pipe, args: [{
                name: 'notEmptyEmojiCategory'
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxEmojiPickerModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: NgxEmojiPickerModule,
            providers: []
        };
    }
}
NgxEmojiPickerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    EmojiPickerApiDirective,
                    EmojiPickerCaretDirective,
                    EmojiButtonComponent,
                    EmojiContentComponent,
                    EmojiPickerComponent,
                    EmojiListComponent,
                    EmojiHeaderComponent,
                    EmojiSearchComponent,
                    EmojiCategoriesComponent,
                    EmojiCategoryComponent,
                    EmojiFooterComponent,
                    EmojiEmptyCategoryPipe
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    EmojiPickerApiDirective,
                    EmojiPickerCaretDirective,
                    EmojiButtonComponent,
                    EmojiContentComponent,
                    EmojiPickerComponent,
                    EmojiListComponent,
                    EmojiHeaderComponent,
                    EmojiSearchComponent,
                    EmojiCategoriesComponent,
                    EmojiCategoryComponent,
                    EmojiFooterComponent
                ],
                providers: [],
                entryComponents: [EmojiPickerComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxEmojiPickerModule, CaretEvent, EmojiEvent, EmojiButtonComponent as ɵc, EmojiCategoriesComponent as ɵj, EmojiCategoryComponent as ɵf, EmojiContentComponent as ɵd, EmojiFooterComponent as ɵk, EmojiHeaderComponent as ɵh, EmojiListComponent as ɵe, EmojiPickerComponent as ɵg, EmojiSearchComponent as ɵi, EmojiPickerApiDirective as ɵa, EmojiPickerCaretDirective as ɵb, EmojiEmptyCategoryPipe as ɵl };

//# sourceMappingURL=ngx-emoji-picker-lagily.js.map