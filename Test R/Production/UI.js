$(function () {
    //#region SVGs
    const SVG_AVAILABLE = `<svg class="click-and-collect-available-icon" height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm129.75 201.75-138.667969 138.664062c-4.160156 4.160157-9.621093 6.253907-15.082031 6.253907s-10.921875-2.09375-15.082031-6.253907l-69.332031-69.332031c-8.34375-8.339843-8.34375-21.824219 0-30.164062 8.339843-8.34375 21.820312-8.34375 30.164062 0l54.25 54.25 123.585938-123.582031c8.339843-8.34375 21.820312-8.34375 30.164062 0 8.339844 8.339843 8.339844 21.820312 0 30.164062zm0 0"/></svg>`;

    const SVG_UNAVAILABLE = `<?xml version="1.0" encoding="utf-8"?><!-- Generator: Adobe Illustrator 24.3.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 43.5 43.74" style="enable-background:new 0 0 43.5 43.74;" xml:space="preserve" class="click-and-collect-unavailable-icon"><image style="overflow:visible;opacity:0.25;" width="512" height="512" xlink:href="data:image/png;base64,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" transform="matrix(0.0781 0 0 0.0781 1.7517 2.2744)"></image></svg>`;
    //#endregion SVGs

    const PLACEHOLDER_HTML = `
        <div class="placeholder_content" style="display:none">
            <div class="placeholder_item placeholder_item_left"></div>
            <div class="placeholder_item placeholder_item_right"></div>
        </div>`;

    $('.select-location').hide();
    let checkApp = ClickAndCollect.checkAppStatus();
    if (checkApp.LicensedExpired || checkApp.planLimitReached || checkApp.wizardSetupNotCompleted || checkApp.AppUninstalled || checkApp.AppDisabled) {
        console.log(Object.keys(checkApp)[0]);
    }
    else {

        

        var subsiteurl;
        if (ClickAndCollect.getBaseUrl().includes(".cc.")) {
            subsiteurl = 'cc.'
        }
        if (ClickAndCollect.getBaseUrl().includes(".clickandcollectstg.")) {
            subsiteurl = 'clickandcollectstg.'
        }

        $('head').append('<link rel="stylesheet" href="https://' + subsiteurl + 'randemcommerce.com/assets/BC/clickandcollect.css">');
        $('head').append('<link rel="stylesheet" href="' + ClickAndCollect.getBaseUrl() + '/assets/BC/Custom/UI.css">');

        $('head').append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/datepicker/1.0.10/datepicker.min.css" integrity="sha512-YdYyWQf8AS4WSB0WWdc3FbQ3Ypdm0QCWD2k4hgfqbQbRCJBEgX0iAegkl2S1Evma5ImaVXLBeUkIlP6hQ1eYKQ==" crossorigin="anonymous" />');

        $('head').append('<script src="https://cdnjs.cloudflare.com/ajax/libs/datepicker/1.0.10/datepicker.min.js" integrity="sha512-RCgrAvvoLpP7KVgTkTctrUdv7C6t7Un3p1iaoPr1++3pybCyCsCZZN7QEHMZTcJTmcJ7jzexTO+eFpHk4OCFAg==" crossorigin="anonymous"></script>');

        $('head').append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/10.14.1/sweetalert2.min.css" integrity="sha512-A374yR9LJTApGsMhH1Mn4e9yh0ngysmlMwt/uKPpudcFwLNDgN3E9S/ZeHcWTbyhb5bVHCtvqWey9DLXB4MmZg==" crossorigin="anonymous" />')

        $('head').append('<script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/10.14.1/sweetalert2.min.js" integrity="sha512-EA9r8JpWbDk5D7aCAyCc+BgwgJ1tbGeCTiXnOn+2Dcz2Hlh/IPyzfUzdpx5XngNElAtsAKlfyGUAfF/BgO4kuw==" crossorigin="anonymous"></script>');

        $('head').append('<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAna8xh3ic_po1wKrE1T5zwoxx_Eb3eBAs&libraries=places&channel=GMPSB_addressselection_v1_cABC"</script>');

        let customization = ClickAndCollect.getCustomization();
        let Stores;
        let datePickUp;
        let datePicked = '';
        let timePicked = '';
        let currentStoreSelected = getCookie("storeSelectedID");
        let headerComponent = '.header #click-and-collect-header-component';
        let headerComponentMobile = '.header';
        let productComponent = '.productView .productView-options';
        let cartComponent = '.cart-item-title';
        let checkoutHeaderCompenent = '.checkoutHeader.optimizedCheckout-header';
        let datePickerEnabled = ClickAndCollect.timeslotEnabled().Value;
        let trackingInventroy = ClickAndCollect.trackingInventory().Value;
        let google_address = JSON.parse(localStorage.getItem('google_address'));
        let sddEnabled = 'true'; //ClickAndCollect.getSameDayDeliveryStatus()

        generateStyleSheet(customization);
        function generateStyleSheet(customization) {
            var styleSheet =
                `<style>
                body .click-and-collect-location-icon {
                    fill: ${customization.ClickAndCollectMainColor};
                }
                body .click-and-collect-search-icon {
                    fill: ${customization.ClickAndCollectMainColor};
                }
                body .click-and-collect-arrow-right-icon {
                    fill: ${customization.ClickAndCollectMainColor};
                }
                body .click-and-collect-current-location-icon {
                    fill: ${customization.ClickAndCollectMainColor};
                }
                body .click-and-collect-close-icon {
                    fill: ${customization.ClickAndCollectMainColor};
                }
                body .click-and-collect-details-arrow-icon {
                    fill: ${customization.ClickAndCollectMainColor};
                }
                body .click-and-collect-available-icon {
                    fill: ${customization.AvailableTextColor};
                }
                body .cart-item .onlineAvailability.available, 
                body .storeSection .onlineAvailability.available{
                    color: ${customization.ClickAndCollectMainColor};
                }
                body .cart-item .sdd-cart-availability.available-sdd,
                body .cart-item .availability.available{
                    color: ${customization.AvailableTextColor}!important;
                }
                body .click-and-collect-unavailable-icon {
                    fill: ${customization.UnavailableTextColor};
                }
                body .click-and-collect-set-store {
                    color: ${customization.ClickAndCollectMainColor};
                }
                body .click-and-collect-dropdown {
                    border-top-color: ${customization.ClickAndCollectMainColor};
                }
                body .click-and-collect-current-indicator {
                    color: ${customization.ClickAndCollectMainColor};
                }
                body .click-and-collect-secondary-button {
                    color: ${customization.ClickAndCollectMainColor};
                }
                body .click-and-collect-primary-button {
                    color: ${customization.ClickAndCollectMainColor};
                    border-color: ${customization.ClickAndCollectMainColor};
                }
                body .click-and-collect-unavailable-text,  body .onlineAvailability.notAvailable,  body .sdd-cart-availability.unavailable-sdd{
                    color: ${customization.UnavailableTextColor};
                }
                body .click-and-collect-available-text {
                    color: ${customization.AvailableTextColor};
                }
                body #click-and-collect-checkout-pickup-button, body #click-and-collect-checkout-delivery-button {
                    color:  ${customization.TextColorCheckout};
                    background-color: ${customization.CheckoutButtonBackgroundColor};
                    border-color: ${customization.CheckoutButtonBackgroundColor};
                }
                body #click-and-collect-checkout-pickup-button[disabled], body #click-and-collect-checkout-delivery-button[disabled] {
                    color:  ${customization.TextColorCheckout};
                    background-color: ${customization.SelectedCheckoutButtonBackgroundColor};
                    border-color: ${customization.SelectedCheckoutButtonBackgroundColor};
                }
            </style>`;
            $('head').append(styleSheet);
        }
        let ClickAndCollectV2 = {
            'getAllStoresV2': function () {
                var allStores;
                var baseurl = ClickAndCollect.getBaseUrl();
                var apiurl = '/api/v2/store/list/getall';
                var fullurl = baseurl + apiurl;
                $.ajax({
                    cache: false,
                    type: 'GET',
                    url: fullurl,
                    async: false,
                    success: function (response) {
                        allStores = response;
                    },
                    error: function (response) {
                        console.log("couldn't get stores");
                    },
                });
                return allStores;
            }

        }

        Stores = ClickAndCollectV2.getAllStoresV2();
        if ($('.productView').length > 0) {
            var dataRequest = {};
            if ($('[data-product-sku]').html().length > 0) {
                var sku = $('[data-product-sku]').html();
                dataRequest.SKU = sku;
                Stores = ClickAndCollect.getAllStoresWithQuantity(dataRequest);
            }

            $('[data-product-sku]').on("DOMNodeInserted", function (e) {
                var sku = $(this).html();
                dataRequest.SKU = sku;
                Stores = ClickAndCollect.getAllStoresWithQuantity(dataRequest);
            });
        }

        let clickAndCollectHeaderHTML =
            `<div class="clickandcollect-header">
        <div class="setStoreWrapper">
        <div class="click-and-collect-set-store setStore">
                <div class="icon">
                <svg class="click-and-collect-location-icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                        <path d="M256,0C161.896,0,85.333,76.563,85.333,170.667c0,28.25,7.063,56.26,20.49,81.104L246.667,506.5
                            c1.875,3.396,5.448,5.5,9.333,5.5s7.458-2.104,9.333-5.5l140.896-254.813c13.375-24.76,20.438-52.771,20.438-81.021
                            C426.667,76.563,350.104,0,256,0z M256,256c-47.052,0-85.333-38.281-85.333-85.333c0-47.052,38.281-85.333,85.333-85.333
                            s85.333,38.281,85.333,85.333C341.333,217.719,303.052,256,256,256z"/>
                </svg>
                </div>
                <p>${customization.PickupButtontext}</p>
                <p class="title">SET A STORE</p>
                <p class="text time">View availability of stores near you</p>
                <span class="arrow-right">
                <svg class="click-and-collect-arrow-right-icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    width="451.846px" height="451.847px" viewBox="0 0 451.846 451.847" style="enable-background:new 0 0 451.846 451.847;"
                    xml:space="preserve">
                    <path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
                        L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
                        c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"/>
                </svg>
                </span>
            </div>
        </div>
        </div>`;

        let clickAndCollectDropdownComponent =
            `<div class="click-and-collect-dropdown storesDropdown">
        <div class="click-and-collect-overlay"></div>
            <div class="close">
                <span>
                <svg class="click-and-collect-close-icon" height="329pt" viewBox="0 0 329.26933 329" width="329pt" xmlns="http://www.w3.org/2000/svg"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/></svg>
                </span>
            </div>
            <p class="title">Select a Store</p>
            <span class="icon use-my-current-loc">
                <svg class="click-and-collect-location-icon use-my-current-loc" width="12px" height="16px" viewBox="0 0 13 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <title>Shape</title>
                    <g id="Click-&amp;-Collect" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Fluevog---Click-&amp;-Collect---Set-a-store" transform="translate(-1159.000000, -63.000000)" fill="#000000" fill-rule="nonzero">
                            <g id="Group-5" transform="translate(1143.000000, 0.000000)">
                                <g id="Group-7">
                                    <g id="pin-copy" transform="translate(16.000000, 63.000000)">
                                        <path d="M6.1495098,0 C2.86406706,0 0.191176471,2.59944067 0.191176471,5.79456956 C0.191176471,9.75982439 5.52330111,15.5810502 5.75032104,15.8269255 C5.9635559,16.0578946 6.33584931,16.0574883 6.54869857,15.8269255 C6.7757185,15.5810502 12.1078431,9.75982439 12.1078431,5.79456956 C12.1078431,2.59944067 9.43492041,0 6.1495098,0 Z M6.1495098,8.70997936 C4.49652193,8.70997936 3.15175417,7.40213402 3.15175417,5.79456956 C3.15175417,4.1870051 4.49655406,2.87919101 6.1495098,2.87919101 C7.80246555,2.87919101 9.1472333,4.18703635 9.1472333,5.79460081 C9.1472333,7.40216527 7.80246555,8.70997936 6.1495098,8.70997936 Z" id="Shape"></path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </span>
            <span class="text useCurrentLocation">Use my current location</span>
            <div class="search-input">
                <input type="text" id="storeInputHeader" placeholder="Enter zipcode or suburb">
                <svg class="click-and-collect-search-icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 511.999 511.999;" xml:space="preserve">
                        <path d="M508.874,478.708L360.142,329.976c28.21-34.827,45.191-79.103,45.191-127.309c0-111.75-90.917-202.667-202.667-202.667
                            S0,90.917,0,202.667s90.917,202.667,202.667,202.667c48.206,0,92.482-16.982,127.309-45.191l148.732,148.732
                            c4.167,4.165,10.919,4.165,15.086,0l15.081-15.082C513.04,489.627,513.04,482.873,508.874,478.708z M202.667,362.667
                            c-88.229,0-160-71.771-160-160s71.771-160,160-160s160,71.771,160,160S290.896,362.667,202.667,362.667z"/>
                </svg>
            </div>
            <div class="myStore" mylat="" mylon="" style="display: none;">
                <p class="availability" style="display: none;"></p>
                <p class="storeName">Store Name</p>
                <span storeLat="" storeLon="" class="distance"></span>
                <p class="storeAddress"></p>
                <span class="click-and-collect-current-indicator currentIndicator">
                <svg class="click-and-collect-location-icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                        <path d="M256,0C161.896,0,85.333,76.563,85.333,170.667c0,28.25,7.063,56.26,20.49,81.104L246.667,506.5
                            c1.875,3.396,5.448,5.5,9.333,5.5s7.458-2.104,9.333-5.5l140.896-254.813c13.375-24.76,20.438-52.771,20.438-81.021
                            C426.667,76.563,350.104,0,256,0z M256,256c-47.052,0-85.333-38.281-85.333-85.333c0-47.052,38.281-85.333,85.333-85.333
                            s85.333,38.281,85.333,85.333C341.333,217.719,303.052,256,256,256z"/>
                </svg>
                <span >My Current Store</span>
                </span>
                <span class="showDetails"><span class="click-and-collect-secondary-button text">View Store Details</span>
                <svg class="click-and-collect-details-arrow-icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    width="451.847px" height="451.847px" viewBox="0 0 451.847 451.847" style="enable-background:new 0 0 451.847 451.847;"
                    xml:space="preserve">
                    <path d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
                        c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
                        c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"/>
                </svg>
                </span>
                
                <div class="storeDetails" style="display: none">
                    
                </div>
            </div>
            
            <div class="content">
    
            </div>
        </div>`
        let clickAndCollectHeaderMobileHTML =
            `<div class="click-and-collect-mobile">
            <div class="setStoreWrapper">
                <div class="setStore">
                    <div class="icon">
                    <svg class="click-and-collect-location-icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                            <path d="M256,0C161.896,0,85.333,76.563,85.333,170.667c0,28.25,7.063,56.26,20.49,81.104L246.667,506.5
                                c1.875,3.396,5.448,5.5,9.333,5.5s7.458-2.104,9.333-5.5l140.896-254.813c13.375-24.76,20.438-52.771,20.438-81.021
                                C426.667,76.563,350.104,0,256,0z M256,256c-47.052,0-85.333-38.281-85.333-85.333c0-47.052,38.281-85.333,85.333-85.333
                                s85.333,38.281,85.333,85.333C341.333,217.719,303.052,256,256,256z"/>
                    </svg>
                    </div>
                    <p class="cc-text-mobile">${customization.PickupButtontext}</p>
                    <p class="title">Set a store</p>
                </div>
            </div>
        </div>`;

        let clickAndCollectProductHTML =
            `<div class="storeSection">
        <span>PICK UP IN STORE</span>
        <p class="variantAvailability" style="display:none;">Select a variant to view product availability</p>
        <div class="cnc-flex-wrap">
            <p class="onlineAvailability" style="display: none;"></p>
            <p class="availability" style="display: none;"></p>
            ${PLACEHOLDER_HTML}
        </div>
        <!-- <div class="chooseStore">
            <p class="title">Change Store</p>
        </div> -->
        <div class="setStoreWrapper">
            <div class="myStore" mylat="" mylon="" style="display: none;">
                <span class="storeName"></span>
                <p class="storeAddress"></p>
                <span class="text time"></span>
            </div>
            <div class="chooseStore">
                <p class="title click-and-collect-set-store">Click Here</p>
            </div>
        </div>
        <div class="alternativeStores" style="display: none;">
            <p>Currently in stock at:</p>
            <ul class="allAltStores"></ul>
        </div>
        </div>`

        let clickAndCollectCartHTML =
            `<span class="onlineAvailability" sku></span>
        <span> | </span>
        <span class="availability" sku></span>`

        let prefferedCheckoutButtons =
            `<div class="buttonsWrapper">
                <button id="click-and-collect-checkout-delivery-button" class="button button--primary delivery">${customization.ShippingButtonText}</button>
                <button id="click-and-collect-checkout-pickup-button" class="button button--primary pickup">${customization.PickupButtontext}</button>
                ${ sddEnabled == 'true' ? `<button id="click-and-collect-checkout-samedaydelivery-button" class="button button--primary sameday" style="display:none;">Same Day Delivery</button>`:`` }
            </div>`;

        let clickAndCollectComponent =
            `<div class="cs-address-loader-hldr" style="display: none;">
                <div class="cs-address-loader"></div>
            </div>
            <div id="pickUpSection">
                <h1>${customization.PickupSectionTitle}</h1>
                <div class="chooseStore noStoreSelected">
                    <div class="icon">
                    <svg class="click-and-collect-location-icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                            <path d="M256,0C161.896,0,85.333,76.563,85.333,170.667c0,28.25,7.063,56.26,20.49,81.104L246.667,506.5
                                c1.875,3.396,5.448,5.5,9.333,5.5s7.458-2.104,9.333-5.5l140.896-254.813c13.375-24.76,20.438-52.771,20.438-81.021
                                C426.667,76.563,350.104,0,256,0z M256,256c-47.052,0-85.333-38.281-85.333-85.333c0-47.052,38.281-85.333,85.333-85.333
                                s85.333,38.281,85.333,85.333C341.333,217.719,303.052,256,256,256z"/>
                    </svg>
                    </div>
                    <p class="title">Select Store</p>
                </div>
                <div class="storeSection" style="display:none;">
                    <div class="row">
                        <div class="columns large-6 medium-12">
                            <div class="setStoreWrapper" style="display: none;">
                                <div class="myStore" mylat="" mylon="" style="display: none;">
                                    <p class="storeName"></p>
                                    <p class="storeAddress" address1 address2 city stateOrProvince stateOrProvinceCode country countryCode postalCode></p>
                                </div>
                                <div class="storeDetails">
                                    <div class="details">
                                        <div class="address">
                                            <label>Store Hours:</label>
                                            <span class="info">
                                                <p class="day monday">Mon: <span class="open"></span> - <span class="close"></span></p>
                                                <p class="day tuesday">Tue: <span class="open"></span> - <span class="close"></span></p>
                                                <p class="day wednesday">Wed: <span class="open"></span> - <span class="close"></span></p>
                                                <p class="day thursday">Thu: <span class="open"></span> - <span class="close"></span></p>
                                                <p class="day friday">Fri: <span class="open"></span> - <span class="close"></span></p>
                                                <p class="day saturday">Sat: <span class="open"></span> - <span class="close"></span></p>
                                                <p class="day sunday">Sun: <span class="open"></span> - <span class="close"></span></p>
                                            </span>
                                        </div>
                                        <div class="phone">
                                            <label>Contact:</label>
                                            <span class="info">
                                                <a></a>
                                            </span>
                                        </div>
                                    </div>
    
                
                                </div>
                            </div>
                        </div>
                        <div class="columns large-6 medium-12">
                            <div class="chooseStore" style="display: none;">
                                <div class="icon">
                                <svg class="click-and-collect-location-icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                        <path d="M256,0C161.896,0,85.333,76.563,85.333,170.667c0,28.25,7.063,56.26,20.49,81.104L246.667,506.5
                                            c1.875,3.396,5.448,5.5,9.333,5.5s7.458-2.104,9.333-5.5l140.896-254.813c13.375-24.76,20.438-52.771,20.438-81.021
                                            C426.667,76.563,350.104,0,256,0z M256,256c-47.052,0-85.333-38.281-85.333-85.333c0-47.052,38.281-85.333,85.333-85.333
                                            s85.333,38.281,85.333,85.333C341.333,217.719,303.052,256,256,256z"/>
                                </svg>
                                </div>
                                <p class="title click-and-collect-set-store">Select Store</p>
                            </div>
                            <div class="storeMap" storeID="" style="width: 100%; display: none;">
                            </div>
                        </div>
                    </div>
    
                </div>
                <div id="datePickerSectionWrapper">
                <p style="margin-top: 15px; font-weight: bold; margin-bottom: 0;">Choose your pick-up slot</p>
                    <div id="datePickerSection">
                        <div id="datepicker-container">
                            <label class="form-label" for="allTimes">Date</label>
                            <input type="text" placeholder="Date to pick-up" class="form-input datePicker" readonly>
                        </div>
                        <div id="timepicker-container" style="display: none;">
                            <label class="form-label" for="allTimes">Time
                            </label>
                            <select name="allTimes" id="allTimes" class="form-select" >
                                <option value="NaN" selected>Select a time to pickup</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="form-field form-field--input form-field--inputText">
                    <label class="form-label" for="Comment">Order Comments
                    </label>
                    <input type="text" id="CommentPickup" name="Comment" class="form-input">
                    <span class="form-inlineMessage errorColor"
                        style="display: none;"></span>
                </div>
                <div class="form-field form-field--input form-field--inputText" style="margin-top: 20px;">
                    <label class="form-label">Pickup Type</label>
                    <select id="PickupType" class="form-select">
                        <option value="Pick up inside the store" selected>Pickup inside the store</option>
                        <option value="Curb Side Pick up" >Curb Side Pick up</option>
                    </select>
                </div>
                <div class="pickupButtonWrapper" style="display: none;">
                    <a class="button button--primary confirmPickup">Next</a>
                </div>
            </div>`;
        
        let sameDayDeliveryComponent =
        `
        <div id="sameDayDelivery" style="display:none;">
            <div class="form-legend-container">
                <legend class="form-legend optimizedCheckout-headingSecondary" data-test="shipping-address-heading">Shipping
                    Address (Please validate your address below)</legend>
            </div>
            <div class="checkout-address">
                <div class="dynamic-form-field dynamic-form-field--firstName">
                    <div class="form-field"><label for="firstNameInput" class="form-label optimizedCheckout-form-label">First
                            Name</label><input autocomplete="given-name" id="firstNameInputSDD" name="shippingAddress.firstName"
                            class="form-input optimizedCheckout-form-input" type="text" data-test="firstNameInput-text"
                            value=""></div>
                </div>
                <div class="dynamic-form-field dynamic-form-field--lastName">
                    <div class="form-field"><label for="lastNameInput" class="form-label optimizedCheckout-form-label">Last
                            Name</label><input autocomplete="family-name" id="lastNameInputSDD" name="shippingAddress.lastName"
                            class="form-input optimizedCheckout-form-input" type="text" data-test="lastNameInput-text" value="">
                    </div>
                </div>
                <div class="dynamic-form-field dynamic-form-field--company">
                    <div class="form-field"><label for="companyInput" class="form-label optimizedCheckout-form-label">Company
                            Name <small class="optimizedCheckout-contentSecondary">(Optional)</small></label><input
                            autocomplete="organization" id="companyInputSDD" name="shippingAddress.company"
                            class="form-input optimizedCheckout-form-input" type="text" data-test="companyInput-text" value="">
                    </div>
                </div>
                <div class="dynamic-form-field dynamic-form-field--phone">
                    <div class="form-field"><label for="phoneInput" class="form-label optimizedCheckout-form-label">Phone
                            Number</label><input autocomplete="tel" id="phoneInputSDD" name="shippingAddress.phone"
                            class="form-input optimizedCheckout-form-input" type="text" data-test="phoneInput-text" value="">
                    </div>
                </div>
                <div class="dynamic-form-field dynamic-form-field--addressLineAutocomplete">
                    <div class="form-field"><label for="shippingAddress.address1"
                            class="form-label optimizedCheckout-form-label">Address</label>
                        <div role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-labelledby="downshift-0-label">
                            <input aria-autocomplete="list" aria-labelledby="downshift-0-label" autocomplete="off"
                                id="addressLine1InputSDD" class="form-input optimizedCheckout-form-input pac-target-input"
                                value="" placeholder="Enter a location"></div>
                    </div>
                </div>
                <div class="dynamic-form-field dynamic-form-field--addressLine2">
                    <div class="form-field"><label for="addressLine2Input"
                            class="form-label optimizedCheckout-form-label">Apartment/Suite/Building <small
                                class="optimizedCheckout-contentSecondary">(Optional)</small></label><input
                            autocomplete="address-line2" id="addressLine2InputSDD" name="shippingAddress.address2"
                            class="form-input optimizedCheckout-form-input" type="text" data-test="addressLine2Input-text"
                            value=""></div>
                </div>
                <div class="dynamic-form-field dynamic-form-field--city">
                    <div class="form-field"><label for="cityInput"
                            class="form-label optimizedCheckout-form-label">City</label><input autocomplete="address-level2"
                            id="cityInputSDD" name="shippingAddress.city" class="form-input optimizedCheckout-form-input"
                            type="text" data-test="cityInput-text" value=""></div>
                </div>
                <div class="dynamic-form-field dynamic-form-field--countryCode">
                    <div class="form-field"><label for="countryCodeInput"
                            class="form-label optimizedCheckout-form-label">Country</label><select autocomplete="country"
                            class="form-select optimizedCheckout-form-select" data-test="countryCodeInput-select"
                            id="countryCodeInputSDD" name="shippingAddress.countryCode">
                                <option value="">Select a country</option>
                                <option value="US">United States</option>
                        </select>
                    </div>
                </div>
                <div class="dynamic-form-field dynamic-form-field--provinceCode">
                    <div class="form-field"><label for="provinceCodeInput"
                            class="form-label optimizedCheckout-form-label">State/Province</label>
                            <select autocomplete="address-level1" class="form-select optimizedCheckout-form-select"
                            data-test="provinceCodeInput-select" id="provinceCodeInputSDD" name="shippingAddress.stateOrProvinceCode">
                            <option value="">Select a state</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AS">American Samoa</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="AA">Armed Forces Americas</option>
                            <option value="AE">Armed Forces Europe</option>
                            <option value="AP">Armed Forces Pacific</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District of Columbia</option>
                            <option value="FM">Federated States Of Micronesia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="GU">Guam</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MH">Marshall Islands</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="MP">Northern Mariana Islands</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PW">Palau</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="PR">Puerto Rico</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VI">Virgin Islands</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>
                    </div>
                </div>
                <div class="dynamic-form-field dynamic-form-field--postCode">
                    <div class="form-field"><label for="postCodeInput" class="form-label optimizedCheckout-form-label">Postal
                            Code</label><input autocomplete="postal-code" id="postCodeInputSDD"
                            name="shippingAddress.postalCode" class="form-input optimizedCheckout-form-input" type="text"
                            data-test="postCodeInput-text" value=""></div>
                </div>
                <div class="dynamic-form-field">
                    <div class="form-field" style="display: none;"><label for="field_26Input"
                            class="form-label optimizedCheckout-form-label">Ship from store <small
                                class="optimizedCheckout-contentSecondary">(Optional)</small></label><input
                            id="field_26InputSDD" name="shippingAddress.customFields.field_26"
                            class="form-input optimizedCheckout-form-input" type="text" data-test="field_26Input-text" value="">
                    </div>
                </div>
            </div>
            <div class="form-body">
                <div class="form-field"><input name="billingSameAsShipping"
                        class="form-checkbox optimizedCheckout-form-checkbox" id="sameAsBillingSDD" type="checkbox" value="true"
                        checked=""><label for="sameAsBillingSDD" class="form-label optimizedCheckout-form-label">My billing
                        address is the same as my shipping address.</label>
                </div>
                <div class="dynamic-form-field">
                    <div class="form-field">
                        <label for="not-home" class="form-label optimizedCheckout-form-label">If I'm not home:<small
                                class="optimizedCheckout-contentSecondary">(Optional)</small></label>
                        <select class="form-select optimizedCheckout-form-select" data-test="not-home-select" id="not-home"
                        name="not-home">
                            <option value="">Please select an option</option>
                            <option value="0">Leave package at the door</option>
                            <option value="1">Return the package</option>
                        </select>
                    </div>
                </div>
                <fieldset class="form-fieldset" data-test="checkout-shipping-comments">
                    <legend class="form-legend optimizedCheckout-headingSecondary">Order Comments</legend>
                    <div class="form-body">
                        <div class="form-field">
                            <label for="orderCommentSDD" class="form-label is-srOnly optimizedCheckout-form-label">Order Comments</label>
                            <input name="orderCommentSDD" autocomplete="off" maxlength="2000" class="form-input optimizedCheckout-form-input" type="text" value="" id="orderCommentSDD">
                        </div>
                    </div>
                </fieldset>
            </div><a class="button button--primary confirmSameDayDelivery optimizedCheckout-buttonPrimary">Continue</a>

        </div>
        `;

        let sameDayDeliveryProductHTML = 
            `
            <div class="storeSection sdd-section" style="display: none;">
                <span>SAME DAY DELIVERY</span>
                <img src="https://cdn11.bigcommerce.com/s-qbuwkvkdhk/product_images/uploaded_images/powered-by-uber.png">
                <div class="section-content" style="">
                    <p class="variantAvailability" style="display:none;">Select a variant to view product availability</p>
                    <input type="text" id="sameDayDeliveryInput" placeholder="Enter you address" class="pac-target-input form-input" autocomplete="off">
                    <p>Enter your address to see if you are eligible for Same Day Delivery</p>
                    <div class="sameDayDeliveryResult" style="display: none;">
                        <div class="custom-loader" style="display: none;"></div>
                        <span class="availability-text" style="display: none;">${SVG_UNAVAILABLE}<strong class="availability-sdd">Not available</strong> for Same Day Delivery for this address</span>
                        <span class="availability-text-cart" style="display: none;"><strong class="availability-sdd"></strong></span>
                    </div>
                </div>
            </div>
            `;

        var url = ClickAndCollect.getBaseUrl() + '/assets/BC/Custom/UI.css">';
        var style = document.createElement('style');
        style.textContent = '@import "' + url + '"';

        var fi = setInterval(function () {
            try {
                console.log(style.sheet.cssRules);
                if ($(headerComponent).length > 0) {
                    $(headerComponent).append(clickAndCollectHeaderHTML);
                    $('.header').append(clickAndCollectDropdownComponent);
                }
                else {
                    $('.header .navUser .navUser-bottom').append(clickAndCollectHeaderHTML);
                    $('.header').append(clickAndCollectDropdownComponent);
                }
                if ($(headerComponentMobile)) {
                    $(headerComponentMobile).append(clickAndCollectHeaderMobileHTML);
                }
                if ($(checkoutHeaderCompenent)) {
                    $(checkoutHeaderCompenent).append(clickAndCollectHeaderHTML);
                    $(checkoutHeaderCompenent).append(clickAndCollectDropdownComponent);
                }
                if ($(productComponent)) {
                    $(productComponent).append(clickAndCollectProductHTML);
                    $('.productView-stores').hide();
                }
                if ($(cartComponent).length > 0) {
                    $(cartComponent).prepend(clickAndCollectCartHTML);
                    $('.total-price').prepend(sameDayDeliveryProductHTML);
                    setTimeout(() => {
                        initAddress('sameDayDeliveryInput', 'cart');
                        //checkifSDDCartItems();
                    }, 3000);
                }
                clearInterval(fi);

                //click and collect functions//
                frontEndFunctionality();
                // showingAllStoresByDefault();
                storesFiltering();
                showingAllStoresByDefault();
                setAsStore();
                checkAndSetStore();
                useCurrentLocation();
                quickViewPopup();
                sameDayDeliveryOrders();
                //setOnlineAvailabilityinProdListing();
                //click and collect functions//

            } catch (e) {

            }
        }, 10);

        $('head')[0].appendChild(style);

        function sameDayDeliveryOrders() {
            if($('#same-day-delivery-page').length>0){
                let customerID = $('#same-day-delivery-page').attr('customer-id');
                let request = {
                    BCContext: "stores/8brse8hrm", //change this when going live
                    CustomerId: customerID
                  }
                  let orders = ClickAndCollect.getSameDayDeliveryOrders(request);
                  let html = '';
                  if(orders != "Customer has no orders") {
                    let SDDOrders = orders.SDDOrders;
                    console.log(SDDOrders);
                    for(let i=0; i<SDDOrders.length; i++) {
                        let productsHTML = '';
                        let products = SDDOrders[i].order_products;
                        let orderStatus = SDDOrders[i].delivery_status.toLowerCase();
                        let statusText;
                        let orderStep;
                        switch (orderStatus) {
                            case 'confirmed':
                                statusText = 'thank you for your order';
                                orderStep = 1;
                                break;

                            case 'packed':
                                statusText = 'your order is packed';
                                orderStep = 2;
                                break;

                            case 'awaiting for pickup':
                                statusText = 'Your order is waiting to be collected';
                                orderStep = 3;
                                break;

                            case 'collected':
                                statusText = 'Your order is collected and is on its way';
                                orderStep = 4;
                                break;

                            case 'delivered':
                                statusText = 'Your order is delivered';
                                orderStep = 5;
                                break;

                            case 'cancelled':
                                statusText = 'Your order is cancelled';
                                orderStep = 5;
                                break;

                            case 'returned':
                                statusText = 'Your order is returned';
                                orderStep = 5;
                                break;

                            default:
                                statusText = 'Thank you for your order';
                                orderStep = 1;
                                break;
                        }
                        let notDelivered = false;
                        if(orderStatus == 'cancelled' || orderStatus == 'returned') {
                          notDelivered = true;
                        }
                        for(let j=0; j<products.length; j++) {
                            productsHTML += 
                            `<div class="order-item">
                                <div class="item-image">
                                    <img src="${products[j].primary_image_url}" alt="">
                                </div>
                                <div class="item-description">
                                    <p class="name">${products[j].name}</p>
                                    <p class="price">${SDDOrders[i].currency_code}${products[j].price_inc_tax}</p>
                                </div>
                                <div class="item-quantity">
                                    <p class="quantity">${products[j].quantity}</p>
                                </div>
                                <div class="item-total">
                                    <p class="total">${SDDOrders[i].currency_code}${products[j].total_inc_tax}</p>
                                </div>
                            </div>` 
                        }
                        html += 
                        `<div class="same-day-delivery-details">
                        <div class="status-wrapper">
                        <p class="order-number-header"><strong>ORDER #<span class="order-number">${SDDOrders[i].order_id}</span></strong></p>
                        <ol class="steps">
                            <li class="step is-complete" data-step="1">Confirmed</li>
                            <li class="step ${orderStep>=2?'is-complete':''}" data-step="2">Packed</li>
                            <li class="step ${orderStep>=3?'is-complete':''}" data-step="3">Awaiting for pickup</li>
                            <li class="step ${orderStep>=4?'is-complete':''} ${notDelivered?'not-delivered':''}" data-step="4">Collected</li>
                            <li class="step ${orderStep>=5?'is-complete':''} ${notDelivered?'notDelivered':''}" data-step="5">${notDelivered?orderStatus:'Delivered'}</li>
                        </ol>
                        </div>
                        <div class="track-order-wrapper" ${SDDOrders[i].tracking_url.length>0?'':'style="display:none"'}>
                            <a href="${SDDOrders[i].tracking_url}" target="_blank">Track order></a>
                        </div>
                        <div class="order-header">
                            <h1 class="page-heading">${statusText}</h1>
                            <p class="page-heading"><strong>Your order id is #<span class="order-number">${SDDOrders[i].order_id}</span></strong></p>
                            <p class="page-heading">A summary of your order is shown below.</p>
                        </div>
                        <div class="same-day-delivery-addresses">
                            <div class="same-day-delivery-shipping">
                                <p class="title">Shipping address</p>
                                <p class="info name">${SDDOrders[i].shipping_address.name}</p>
                                <div class="customer-address">
                                    <p class="info address-line-2">${SDDOrders[i].shipping_address.street_1}</p>
                                    <p class="info address-line-2">${SDDOrders[i].shipping_address.street_2}</p>
                                    <p class="info country">${SDDOrders[i].shipping_address.country}, <span class="info postal-code">${SDDOrders[i].shipping_address.zip}</span></p>
                                    <p class="info phone">${SDDOrders[i].shipping_address.phone}</p>
                                    <p class="info email">${SDDOrders[i].shipping_address.email}</p>
                                </div>
                            </div>
                            <div class="same-day-delivery-billing">
                                <p class="title">Billing address</p>
                                <p class="info name">${SDDOrders[i].shipping_address.name}</p>
                                <div class="customer-address">
                                <p class="info address-line-2">${SDDOrders[i].billing_address.street_1}</p>
                                <p class="info address-line-2">${SDDOrders[i].billing_address.street_2}</p>
                                <p class="info country">${SDDOrders[i].billing_address.country}, <span class="info postal-code">${SDDOrders[i].billing_address.zip}</span></p>
                                <p class="info phone">${SDDOrders[i].shipping_address.phone}</p>
                                <p class="info email">${SDDOrders[i].shipping_address.email}</p>
                                </div>
                            </div>
                        </div>
                        <div class="order-details">
                            <h2 class="summary-title">Order Summary</h2>
                            ${productsHTML}
                            <div class="order-summary">
                                <div class="names">
                                    <p class="subtotal">Subtotal:</p>
                                    <p class="same-day-delivery-fee">Same Day Delivvery Fee:</p>
                                    <p class="coupon-code">Coupon Code:</p>
                                    <p class="total">Total:</p>
                                </div>
                                <div class="values">
                                    <p class="subtotal">${SDDOrders[i].currency_code}${SDDOrders[i].subtotal_inc_tax}</p>
                                    <p class="same-day-delivery-fee">${SDDOrders[i].currency_code}${SDDOrders[i].shipping_cost_inc_tax}</p>
                                    <p class="coupon-code">${SDDOrders[i].coupon_code}</p>
                                    <p class="total"><strong>${SDDOrders[i].currency_code}${SDDOrders[i].total_inc_tax}</strong></p>
                                </div>
                            </div>
                        </div>
                
                          </div>`;
                        $('#same-day-delivery-page').html(html);
                    }
                  }
                  else {
                    $('#same-day-delivery-page .no-sdd-orders').show();
                  }
                  $('#same-day-delivery-page').removeClass('custom-loader');
            }
        }

        function checkifSDDProduct(productId){
            getProductsByProductIds(productId).then(res => {
                let data = graphQLToJavascript(res);
                let customFields = data[0].customFields;
                let isSDD = customFields.filter(function (field) {
                    if (field.name == 'SSD' && field.value == 'yes') {
                        return field;
                    }
                });
                console.log(isSDD.length, productId.length, productId);
                if (isSDD.length == 1) {
                    if ($(productComponent)) {
                        // $(productComponent).append(sameDayDeliveryProductHTML);
                        $(sameDayDeliveryProductHTML).insertBefore(productComponent +' .storeSection');
                        $('.storeSection.sdd-section').show();
                        setTimeout(() => {
                            initAddress('sameDayDeliveryInput', 'product');
                            if ((BCData.product_attributes.in_stock_attributes.length && areAllVariantsOptionsPicked()) || !BCData.product_attributes.in_stock_attributes.length){

                            }else{
                                $(".variantAvailability").show();
                                $('#sameDayDeliveryInput').attr('disabled', 'disabled');
                            }
                        }, 3000);
                    }
                }
            });
        }

        function initAddress(inputElementID, location = 'checkout') {
            let allItemsSDDEligble = 1;
            if(google_address) {
                if(google_address.street_number == undefined){

                    $('body #sameDayDeliveryInput').val(google_address.addressLine1+' '+google_address.city);
                }else{

                    $('body #sameDayDeliveryInput').val(google_address.street_number +' '+google_address.street_address +' '+google_address.city);
                }
                $('body #sameDayDeliveryInput').trigger('keyup');
                if(location == 'product') {
                    $('body .sameDayDeliveryResult .click-and-collect-available-icon').show();
                    $('body .sameDayDeliveryResult .click-and-collect-unavailable-icon').hide();
                    $('body .sameDayDeliveryResult .availability-text').show();
                    $('body .sameDayDeliveryResult .availability-text').append(SVG_AVAILABLE);
                    $('body .sameDayDeliveryResult .availability-sdd').text('Available');
                    $('body .sameDayDeliveryResult').show();
                }
                if(location == 'cart'){
                    getCartItemsAsync().then((res) => {
                        let sddItems = [];
                        let productId = [];
                        let resCartItems = res[0].lineItems.physicalItems;
                        let itemIDWithproductId = [];
                        let products = [];
                        let productObject = {};
                        resCartItems.forEach(function (item) {
                            productObject.sku = item.sku;
                            productObject.quantity = item.quantity;
                            products.push(productObject);

                            productId.push(item.productId);
                            
                            itemIDWithproductId.push(
                                {
                                    "itemId": item.id,
                                    "prodId": item.productId
                                }
                            )
                        });
                        
                        getProductsByProductIds(productId).then(resProdcuts => {
                            let data = graphQLToJavascript(resProdcuts);
                            var customFields;
                            $('.sdd-cart-availability').remove();
                            data.forEach(function (dataElements) {
                                let eligibleForSDD = 0;
                                if (dataElements.customFields) {
                                    customFields = dataElements.customFields;
                                    customFields.forEach(function (customFieldsElements) {
                                        if (customFieldsElements.name == 'SSD' && customFieldsElements.value == 'yes') {
                                            sddItems.push(dataElements.entityId);
                                            eligibleForSDD = 1;
                                        }
                                    });
                                }
                                
                                if(eligibleForSDD == 1){
                                	$('.storeSection.sdd-section').show();
                                	$('.sdd-cart-availability').show();
                                    $(`<span class="sdd-cart-availability available-sdd">Available for Same Day Delivery</span>`).insertAfter($(`[productid="${dataElements.entityId}"]`).next('span').next('.availability'));
                                }else{
                                    $(`<span class="sdd-cart-availability unavailable-sdd" style="display:none;">Unavailable for Same Day Delivery</span>`).insertAfter($(`[productid="${dataElements.entityId}"]`).next('span').next('.availability'));
                                }
                            });
        
                            if (productId.length == sddItems.length && sddItems.length > 0) {
                                let request = {};
                                request.products = products;
                                request.address = 
                                {
                                    street_number: google_address.street_number,
                                    street_address: google_address.street_address,
                                    country : google_address.country,
                                    city : google_address.city,
                                    state : google_address.state,
                                    postalCode: google_address.postalCode
                                }
                                console.log('checking');
                                console.log(request);
                                //updateSameDayDeliveryInCart(request.address);
                                setTimeout(() => {
                                    zone = ClickAndCollect.getZone(request);
                                    // zone = true;
                                    console.log('done checking');
                                    console.log(zone);
                                    if(zone) {
                                        localStorage.setItem('google_address', JSON.stringify(request.address));
                                        $('body .custom-loader').hide();
                                        $('body .sameDayDeliveryResult .availability-text-cart .click-and-collect-available-icon').show();
                                        $('body .sameDayDeliveryResult .availability-text-cart .click-and-collect-unavailable-icon').hide();

                                        $('body .sameDayDeliveryResult .availability-text-cart').append(SVG_AVAILABLE);
                                        
                                        $('body .sameDayDeliveryResult .availability-text-cart .availability-sdd').text('Available for Same Day Delivery for this address');
                                        $('body .sameDayDeliveryResult').show();
                                        $('body #sameDayDeliveryInput').val(google_address.street_number+' '+ google_address.street_address + ', ' + google_address.city + ' ' +google_address.postalCode);
                                    }
                                    else {
                                        // localStorage.removeItem('google_address');
                                        $('body .custom-loader').hide();
                                        $('body .sameDayDeliveryResult .availability-text-cart').append(SVG_UNAVAILABLE);
                                        $('body .sameDayDeliveryResult .availability-text-cart .click-and-collect-available-icon').hide();
                                        $('body .sameDayDeliveryResult .availability-text-cart .click-and-collect-unavailable-icon').show();
                                        $('body .sameDayDeliveryResult .availability-text-cart .availability-sdd').text('Not available for Same Day Delivery for this address');
                                        $('body .sameDayDeliveryResult').show();
                                    }
                                    $('body .availability-text-cart').show();
                                }, 500);
                            }else{
                                $('body .sameDayDeliveryResult .availability-text-cart').append(SVG_UNAVAILABLE);
                                $('body .sameDayDeliveryResult .availability-text-cart .click-and-collect-available-icon').hide();
                                $('body .sameDayDeliveryResult .availability-text-cart .click-and-collect-unavailable-icon').show();
                                $('body .sameDayDeliveryResult .availability-text-cart .availability-sdd').text('Some items are not available for Same Day Delivery.');
                                $('body .sameDayDeliveryResult').show();
                                $('body .sameDayDeliveryResult .availability-text-cart').show();
                                $('body input#sameDayDeliveryInput').prop("disabled", true);
                            }
                        });
                    });
                }

                if(location == 'checkout'){
                    document.getElementById(inputElementID).value = google_address.street_number + ' '+google_address.street_address;
                    document.getElementById('cityInputSDD').value = google_address.city;
                    document.getElementById('countryCodeInputSDD').value = google_address.country;
                    document.getElementById('provinceCodeInputSDD').value = google_address.state;
                    document.getElementById('postCodeInputSDD').value = google_address.postalCode;
                }
            }else{
                if(location == 'cart'){
                    getCartItemsAsync().then((res) => {
                        let sddItems = [];
                        let productId = [];
                        let resCartItems = res[0].lineItems.physicalItems;
                        let itemIDWithproductId = [];
                        let products = [];
                        let productObject = {};
                        resCartItems.forEach(function (item) {
                            productObject.sku = item.sku;
                            productObject.quantity = item.quantity;
                            products.push(productObject);

                            productId.push(item.productId);
                            
                            itemIDWithproductId.push(
                                {
                                    "itemId": item.id,
                                    "prodId": item.productId
                                }
                            )
                        });
                        
                        getProductsByProductIds(productId).then(resProdcuts => {
                            let data = graphQLToJavascript(resProdcuts);
                            var customFields;
                            $('.sdd-cart-availability').remove();
                            data.forEach(function (dataElements) {
                                let eligibleForSDD = 0;
                                if (dataElements.customFields) {
                                    customFields = dataElements.customFields;
                                    customFields.forEach(function (customFieldsElements) {
                                        if (customFieldsElements.name == 'SSD' && customFieldsElements.value == 'yes') {
                                            sddItems.push(dataElements.entityId);
                                            eligibleForSDD = 1;
                                        }
                                    });
                                }
                                
                                if(eligibleForSDD == 1){
                                	$('.storeSection.sdd-section').show();
                                	$('.sdd-cart-availability').show();
                                    $(`<span class="sdd-cart-availability available-sdd">Available for Same Day Delivery</span>`).insertAfter($(`[productid="${dataElements.entityId}"]`).next('span').next('.availability'));
                                }else{
                                    $(`<span class="sdd-cart-availability unavailable-sdd" style="display:none;">Unavailable for Same Day Delivery</span>`).insertAfter($(`[productid="${dataElements.entityId}"]`).next('span').next('.availability'));
                                }
                            });
                        });
                    });
                }
            }
            $('body #sameDayDeliveryInput').on('keyup', function(){
                $('body .sameDayDeliveryResult').show();
                $('body .sameDayDeliveryResult .click-and-collect-unavailable-icon').hide();
                $('body .sameDayDeliveryResult .click-and-collect-available-icon').hide();
                $('body .availability-text').hide();


            });
            const addressNameFormat = {
                'street_number': 'long_name',
                'route': 'long_name',
                'postal_code': 'short_name',
                'locality': 'long_name',
                'sublocality': 'long_name',
                'administrative_area_level_1': 'short_name',
                'country': 'short_name'
            };
            const options = {
                types: ['address'],
                componentRestrictions: { country: "us" }
              }

            const autocompleteInput = document.getElementById(inputElementID);
            const autocomplete = new google.maps.places.Autocomplete(autocompleteInput, options);
            autocomplete.addListener('place_changed', function () {
                // setTimeout(() => {
                $('body .sameDayDeliveryResult').attr('style','');
                $('body .sameDayDeliveryResult .availability-text-cart').hide();
                $('body .custom-loader').attr('style','');
                // }, 500);
                

                console.log('now');
                
                $('body .sameDayDeliveryResult .click-and-collect-unavailable-icon').hide();
                $('body .sameDayDeliveryResult .click-and-collect-available-icon').hide();
                // $('body .custom-loader').show();
                $('body .availability-text').hide();
                const place = autocomplete.getPlace();
                
              const getAddressComp = function (type) {
                for (const component of place.address_components) {
                    if (component.types[0] === type) {
                      console.log(component[addressNameFormat[type]]);
                      return component[addressNameFormat[type]];
                    }
                }
                return '';
                };
              if (!place.geometry) {
                // User entered the name of a Place that was not suggested and
                // pressed the Enter key, or the Place Details request failed.
                window.alert('No details available for input: \'' + place.name + '\'');
                return;
              }
              let addressComponents = 
              {
                addressLine1: getAddressComp('street_number') + ' ' + getAddressComp('route'),
                city: getAddressComp('locality')?getAddressComp('locality'):getAddressComp('sublocality_level_1'),
                country: getAddressComp('country'),
                state: getAddressComp('administrative_area_level_1'),
                postalCode: getAddressComp('postal_code')
              };
              let addressComponents_ = 
              {
                street_number: getAddressComp('street_number'),
                street_address: getAddressComp('route'),
                city: getAddressComp('locality')?getAddressComp('locality'):getAddressComp('sublocality_level_1'),
                country: getAddressComp('country'),
                state: getAddressComp('administrative_area_level_1'),
                postalCode: getAddressComp('postal_code')
              };
              console.log(addressComponents)
              if(inputElementID == 'addressLine1InputSDD') {
                    document.getElementById(inputElementID).value = addressComponents.addressLine1;
                    document.getElementById('cityInputSDD').value = addressComponents.city;
                    document.getElementById('countryCodeInputSDD').value = addressComponents.country;
                    document.getElementById('provinceCodeInputSDD').value = addressComponents.state;
                    document.getElementById('postCodeInputSDD').value = addressComponents.postalCode;
              }
              else if(inputElementID == 'sameDayDeliveryInput') {
                let products = [];
                let productObject = {};
                let address = {};
                let zone;
                $('body [data-product-sku]').html();
                if($(productComponent).length>0) {
                    productObject.sku = $('body [data-product-sku]').html();
                    productObject.quantity = $('body .form-input--incrementTotal').val();
                    products.push(productObject);
                }
                // return;
                
                if($(cartComponent).length>0) {
                    getCartItemsAsync().then((res) => {
                        let sddItems = [];
                        let productId = [];
                        let resCartItems = res[0].lineItems.physicalItems;
                        let itemIDWithproductId = [];
                        let products = [];
                        let productObject = {};
                        resCartItems.forEach(function (item) {
                            productObject.sku = item.sku;
                            productObject.quantity = item.quantity;
                            products.push(productObject);

                            productId.push(item.productId);
                            
                            itemIDWithproductId.push(
                                {
                                    "itemId": item.id,
                                    "prodId": item.productId
                                }
                            )
                        });
                        
                        getProductsByProductIds(productId).then(resProdcuts => {
                            let data = graphQLToJavascript(resProdcuts);
                            var customFields;
                            $('.sdd-cart-availability').remove();
                            data.forEach(function (dataElements) {
                                let eligibleForSDD = 0;
                                if (dataElements.customFields) {
                                    customFields = dataElements.customFields;
                                    customFields.forEach(function (customFieldsElements) {
                                        if (customFieldsElements.name == 'SSD' && customFieldsElements.value == 'yes') {
                                            sddItems.push(dataElements.entityId);
                                            eligibleForSDD = 1;
                                        }
                                    });
                                }
                                
                                if(eligibleForSDD == 1){
                                	$('.storeSection.sdd-section').show();
                                	$('.sdd-cart-availability').show();
                                    $(`<span class="sdd-cart-availability available-sdd">Available for Same Day Delivery</span>`).insertAfter($(`[productid="${dataElements.entityId}"]`).next('span').next('.availability'));
                                }else{
                                    $(`<span class="sdd-cart-availability unavailable-sdd" style="display:none;">Unavailable for Same Day Delivery</span>`).insertAfter($(`[productid="${dataElements.entityId}"]`).next('span').next('.availability'));
                                }
                            });
        
                            if (productId.length == sddItems.length && sddItems.length > 0) {
                                let request = {};
                                request.products = products;
                                request.address = addressComponents;
                                console.log('checking');
                                console.log(request);
                                //updateSameDayDeliveryInCart(request.address);
                                setTimeout(() => {
                                    zone = ClickAndCollect.getZone(request);
                                    // zone = true;
                                    console.log('done checking');
                                    console.log(zone);
                                    if(zone) {
                                        localStorage.setItem('google_address', JSON.stringify(addressComponents_));
                                        $('body .custom-loader').hide();
                                        $('body .sameDayDeliveryResult .click-and-collect-available-icon').show();
                                        $('body .sameDayDeliveryResult .click-and-collect-unavailable-icon').hide();
                                        
                                        $('body .sameDayDeliveryResult .availability-text-cart').append(SVG_AVAILABLE);
                                        
                                        $('body .sameDayDeliveryResult .availability-sdd').text('Available for Same Day Delivery for this address');
                                        $('body .sameDayDeliveryResult .availability-text-cart').show();
                                        $('body .sameDayDeliveryResult').show();
                                        $('body #sameDayDeliveryInput').val(addressComponents.addressLine1 + ', ' + addressComponents.city + ' '+addressComponents.postalCode);
                                    }
                                    else {
                                        // localStorage.removeItem('google_address');
                                        $('body .custom-loader').hide();
                                        $('body .sameDayDeliveryResult .availability-text-cart').append(SVG_UNAVAILABLE);
                                        $('body .sameDayDeliveryResult .click-and-collect-available-icon').hide();
                                        $('body .sameDayDeliveryResult .click-and-collect-unavailable-icon').show();
                                        $('body .sameDayDeliveryResult .availability-sdd').text('Not available for Same Day Delivery for this address');
                                        $('body .sameDayDeliveryResult .availability-text-cart').show();
                                        $('body .sameDayDeliveryResult').show();
                                    }
                                    $('body .availability-text-cart').show();
                                }, 500);
                            }else{
                                $('body .custom-loader').hide();
                                $('body .sameDayDeliveryResult .availability-text-cart').append(SVG_UNAVAILABLE);
                                $('body .sameDayDeliveryResult .availability-text-cart .click-and-collect-available-icon').hide();
                                $('body .sameDayDeliveryResult .availability-text-cart .click-and-collect-unavailable-icon').show();
                                $('body .sameDayDeliveryResult .availability-text-cart .availability-sdd').text('Some items are not available for Same Day Delivery.');
                                $('body .sameDayDeliveryResult').show();
                                $('body .sameDayDeliveryResult .availability-text-cart').show();
                                $('body input#sameDayDeliveryInput').prop("disabled", true);
                            }
                        });
                    });
                }

                if(location != 'cart'){
                    let request = {};
                    request.products = products;
                    request.address = 
                    {
                        street_number: getAddressComp('street_number'),
                        street_address: getAddressComp('route'),
                        country : getAddressComp('country'),
                        city : getAddressComp('locality'),
                        state : getAddressComp('administrative_area_level_1'),
                        postalCode: getAddressComp('postal_code')
                    }
                    console.log('checking');
                    console.log(request);
                    //updateSameDayDeliveryInCart(request.address);
                    setTimeout(() => {
                        zone = ClickAndCollect.getZone(request);
                        console.log('done checking');
                        console.log(zone);
                        if(zone) {
                            localStorage.setItem('google_address', JSON.stringify(request.address));
                            $('body .custom-loader').hide();
                            $('body .sameDayDeliveryResult .click-and-collect-available-icon').show();
                            $('body .sameDayDeliveryResult .click-and-collect-unavailable-icon').hide();
    
                            $('body .sameDayDeliveryResult .availability-text').append(SVG_AVAILABLE);
                            
                            $('body .sameDayDeliveryResult .availability-sdd').text('Available');
                            $('body .sameDayDeliveryResult').show();
                            $('body #sameDayDeliveryInput').val(getAddressComp('street_number')+' '+ getAddressComp('route') + ' ' + getAddressComp('locality') + ', ' +getAddressComp('postal_code'));
                        }
                        else {
                            // localStorage.removeItem('google_address');
                            $('body .custom-loader').hide();
                            $('body .sameDayDeliveryResult .availability-text').append(SVG_UNAVAILABLE);
                            $('body .sameDayDeliveryResult .click-and-collect-available-icon').hide();
                            $('body .sameDayDeliveryResult .click-and-collect-unavailable-icon').show();
                            $('body .sameDayDeliveryResult .availability-sdd').text('Not available');
                            $('body .sameDayDeliveryResult').show();
                        }
    
                        $('body .sameDayDeliveryResult').show();
                        $('body .custom-loader').hide();
                        $('body .availability-text').show();
                    }, 500);
                }
              }

            });
        }
        function validateSDDForm() {
            let valid = true;
            if($('#sameDayDelivery #firstNameInputSDD').val() == '') {
                $('body #sameDayDelivery #firstNameInputSDD').parent('.form-field').addClass('form-field--error');
                valid = false;
            }
            else {
                $('body #sameDayDelivery #firstNameInputSDD').parent('.form-field').removeClass('form-field--error');
            }
            if($('#sameDayDelivery #lastNameInputSDD').val() == '') {
                $('body #sameDayDelivery #lastNameInputSDD').parent('.form-field').addClass('form-field--error');
                valid = false;
            }
            else {
                $('body #sameDayDelivery #lastNameInputSDD').parent('.form-field').removeClass('form-field--error');
            }
            if($('#sameDayDelivery #phoneInputSDD').val() == '') {
                $('body #sameDayDelivery #phoneInputSDD').parent('.form-field').addClass('form-field--error');
                valid = false;
            }
            else {
                $('body #sameDayDelivery #lastNameInputSDD').parent('.form-field').removeClass('form-field--error');
            }
            if($('#sameDayDelivery #addressLine1InputSDD').val() == '') {
                $('body #sameDayDelivery #addressLine1InputSDD').parent('.form-field').addClass('form-field--error');
                valid = false;
            }
            else {
                $('body #sameDayDelivery #addressLine1InputSDD').parent('.form-field').removeClass('form-field--error');
            }
            if($('#sameDayDelivery #cityInputSDD').val() == '') {
                $('body #sameDayDelivery #cityInputSDD').parent('.form-field').addClass('form-field--error');
                valid = false;
            }
            else {
                $('body #sameDayDelivery #cityInputSDD').parent('.form-field').removeClass('form-field--error');
            }
            if($('#sameDayDelivery #countryCodeInputSDD').val() == '') {
                $('body #sameDayDelivery #countryCodeInputSDD').parent('.form-field').addClass('form-field--error');
                valid = false;
            }
            else {
                $('body #sameDayDelivery #countryCodeInputSDD').parent('.form-field').removeClass('form-field--error');
            }
            if($('#sameDayDelivery #provinceInputSDD').val() == '') {
                $('body #sameDayDelivery #provinceInputSDD').parent('.form-field').addClass('form-field--error');
                valid = false;
            }
            else {
                $('body #sameDayDelivery #provinceInputSDD').parent('.form-field').removeClass('form-field--error');
            }
            if($('#sameDayDelivery #postCodeInputSDD').val() == '') {
                $('body #sameDayDelivery #postCodeInputSDD').parent('.form-field').addClass('form-field--error');
                valid = false;
            }
            else {
                $('body #sameDayDelivery #postCodeInputSDD').parent('.form-field').removeClass('form-field--error');
            }
            return valid;
        }
        function confirmSameDayDelivery() {
            $('body').on('click', '.confirmSameDayDelivery', function () {
                let valid = validateSDDForm();
                if(!valid) {
                    $('html, body').animate({
                        scrollTop: $("#sameDayDelivery").offset().top
                    }, 500);
                }
                else {
                    
                    let address = {};
                    address.street_number = $('#sameDayDelivery #addressLine2InputSDD').val();
                    address.street_address = $('#sameDayDelivery #addressLine1InputSDD').val();
                    address.country = $('#sameDayDelivery #countryCodeInputSDD').val();
                    address.city = $('#sameDayDelivery #cityInputSDD').val();
                    address.postalCode = $('#sameDayDelivery #postCodeInputSDD').val();
                    if($('body #sameDayDelivery .dynamic-form-field--province').length) {
                        address.state = $('#sameDayDelivery #provinceInputSDD').val();
                    }
                    else if($('body #sameDayDelivery .dynamic-form-field--provinceCode').length) {
                        address.state = $('#sameDayDelivery #provinceCodeInputSDD').val();
                    }
                    
                    let whenUndeliverable = $('body #not-home').val();
                    let zone;
                    let allItemsAvailable;
                    let products = [];
                    
                    let request = {};
                    cartItems.forEach(function(item){
                        let productObject = {};
                        productObject.sku = item.sku;
                        productObject.quantity = item.quantity;
                        products.push(productObject);
                    });
                    request.products = products;
                    request.address = address;
                    zone = ClickAndCollect.getZone(request);
                    // zone = true;
                    if(zone) {
                        allItemsAvailable = true;
                        address.storeSDD = zone[0].Stores[0].StoreName;
                    }
                    else {
                        allItemsAvailable = false;
                    }
                    console.log(zone);
                    if(allItemsAvailable == true) {
                      let infoHTML = `<p>When selecting this option your order will be delivered by Uber. All same day orders must be placed by <strong>${zone[0].ShippingRules[0].DeliveryTo?zone[0].ShippingRules[0].DeliveryTo:zone[0].ShippingRules[0].DeliveryBefore}</strong>, based on carrier availability.</p>`
                      swal.fire({
                          html: infoHTML,
                          showCancelButton: true,
                          confirmButtonText: 'Ok',
                          cancelButtonText: 'Cancel',
                      }).then((result) => {
                        if (result.isConfirmed) {
                          if ($('#shippingAddresses').length > 0) {
                            setTimeout(() => {
                                document.querySelector('.dropdownTrigger').click();
                                setTimeout(() => {
                                    document.querySelectorAll('.dropdown-menu-item.dropdown-menu-item--select a:first-child')[0].click();
                                });
                            });
                          }
    
                          var checkingForm = setInterval(() => {
                              if ($('#checkoutShippingAddress .dynamic-form-field.dynamic-form-field--firstName').length > 0) {
                                  clearInterval(checkingForm);
                                  // if ($('#sameAsBilling').attr('value') == 'true') {
                                  //     $('body [for="sameAsBilling"]').trigger('click');
                                  // }
                                  let notHomeField;
                                  $("#checkoutShippingAddress .checkout-address label").each(function () {
                                      if ($(this).text().includes("If not home")) {
                                        notHomeField = $(this).next("select").get(0);
                                      }
                                  });
                                  let sameDayDeliveryField;
                                  $("#checkoutShippingAddress .checkout-address label").each(function () {
                                      if ($(this).text().includes("Ship from store")) {
                                          sameDayDeliveryField = $(this).next("input").get(0);
                                      }
                                  });
                                  // clearShippingFields();
                                  if ($('.checkout-form input[name="shippingAddress.shouldSaveAddress"]').attr('value') == 'true') {
                                    $('body .checkout-form [for="shippingAddress.shouldSaveAddress"]').trigger('click');
                                  }
                                  changeSelectValue(notHomeField, whenUndeliverable);
                                  changeValue(sameDayDeliveryField, address.storeSDD);

                                  changeValue($('.checkout-step--shipping .checkout-form #firstNameInput').get(0), $('#sameDayDelivery #firstNameInputSDD').val());
                                  changeValue($('.checkout-step--shipping .checkout-form #lastNameInput').get(0), $('#sameDayDelivery #lastNameInputSDD').val());
                                  changeValue($('.checkout-step--shipping .checkout-form #addressLine1Input').get(0), address.street_address);
                                  changeValue($('.checkout-step--shipping .checkout-form #companyInput').get(0), $('#sameDayDelivery #companyInputSDD').val());
                                  changeValue($('.checkout-step--shipping .checkout-form #phoneInput').get(0), $('#sameDayDelivery #phoneInputSDD').val());
                                  changeValue($('.checkout-step--shipping .checkout-form #cityInput').get(0), address.city);
                                  changeValue($('.checkout-step--shipping .checkout-form #postCodeInput').get(0), address.postalCode);
                                  changeSelectValue($('.checkout-step--shipping .checkout-form #countryCodeInput').get(0), address.country);
                                  if ($('.checkout-step--shipping .checkout-form #provinceInput').length > 0) {
                                      changeValue($('.checkout-step--shipping .checkout-form #provinceInput').get(0), address.state);
                                  }
                                  if ($('.checkout-step--shipping .checkout-form #provinceCodeInput').length > 0) {
                                      changeSelectValue($('.checkout-step--shipping .checkout-form #provinceCodeInput').get(0), address.state);
                                  }
                                  if($('#sameDayDelivery #orderCommentSDD').val().length>0) {
                                    changeValue($('#orderComment').get(0), $('#sameDayDelivery #orderCommentSDD').val());
                                  }
                                  
                                  let checkedSDD = $('#sameAsBillingSDD').prop('checked');
                                  let checked = $('#sameAsBilling').prop('checked');
                                  if(checkedSDD != checked) {
                                    $('body [for="sameAsBilling"]').trigger('click');
                                  }
                                      
                                  
                                  $('[name*="Same Day Delivery"]').trigger('click');
                                  var checkingContinueButton = setInterval(() => {
                                    $('[name*="Same Day Delivery"]').trigger('click');
                                    if (!$("#checkout-shipping-continue").attr('disabled') && !$("#checkout-shipping-continue").hasClass('is-loading')) {
                                          $('[name*="Same Day Delivery"]').trigger('click');
                                          // do sth if disabled
                                          $('#checkout-shipping-continue').trigger('click');
                                          clearInterval(checkingContinueButton);
                                          $('.checkout-step.optimizedCheckout-checkoutStep.checkout-step--customer [data-test="step-edit-button"]').show();
                                          $('.checkout-step.optimizedCheckout-checkoutStep.checkout-step--billing [data-test="step-edit-button"]').show();
                                          $('.checkout-step.optimizedCheckout-checkoutStep.checkout-step--customer .checkout-view-header').removeAttr('style');
                                          $('.checkout-step.optimizedCheckout-checkoutStep.checkout-step--customer .stepHeader').removeAttr('style');
                                          $('.checkout-step.optimizedCheckout-checkoutStep.checkout-step--billing .stepHeader').removeAttr('style');
                                      }
                                  }, 200);

                              }
                          }, 200);
                        } 
                        else {

                        }});
                        
                    }
                    else {
                        let html = `<p>One or more items are not available for same day delivery for this address</p>`
                        swal.fire({
                            html: html
                        });
                    }
                }
            });
        }

        function sameAsShipping() {
            $('body').on('click', '#sameAsBillingSDD', function() {
                let checkedSDD = $('#sameAsBillingSDD').prop('checked');
                let checked = $('#sameAsBilling').prop('checked');
                if(checkedSDD != checked) {
                    $('body [for="sameAsBilling"]').trigger('click');
                }
            });
        }

        function hideSDDShippingMethod(){
        	getCartItemsAsync().then((res) => {
                let itemsNotEligibleForSDD = [];
                let productId = [];
                let deleteItems = [];
                let resCartItems = res[0].lineItems.physicalItems;
                let itemIDWithproductId = [];
                resCartItems.forEach(function (item) {
                    productId.push(item.productId);
                    itemIDWithproductId.push(
                        {
                            "itemId": item.id,
                            "prodId": item.productId
                        }
                    )
                });

                getProductsByProductIds(productId).then(resProdcuts => {
                    let data = graphQLToJavascript(resProdcuts);
                    var customFields;

                    data.forEach(function (dataElements) {
                        if (dataElements.customFields) {
                            customFields = dataElements.customFields;
                            customFields.forEach(function (customFieldsElements) {
                                if (customFieldsElements.name == 'SSD' && customFieldsElements.value == 'yes') {
                                    itemsNotEligibleForSDD.push(dataElements.entityId);
                                }else{
                                }
                            });
                            deleteItems = itemIDWithproductId.map(function (item) {
                                if (itemsNotEligibleForSDD.includes(item.prodId) == false) {
                                    return {
                                        "id": item.itemId,
                                        "quantity": 0
                                    };
                                }
                            });
                        }
                    });
                    deleteItems = deleteItems.filter(e => e);
                    if (deleteItems.length > 0 && deleteItems.length == resCartItems.length) {
                    	console.log('remove sdd opt')
                    	$('#click-and-collect-checkout-samedaydelivery-button').hide();
                    	$('div#sameDayDelivery').hide();
                        
                    }else{
                    	console.log('hide sdd opt')
                    	$('#click-and-collect-checkout-samedaydelivery-button').show();
                    }
                });
            });
        }

        function checkAllItemsIfAvailableSDD() {
            $('.cs-address-loader-hldr').show();
            getCartItemsAsync().then((res) => {
                let itemsNotEligibleForSDD = [];
                let productId = [];
                let deleteItems = [];
                let resCartItems = res[0].lineItems.physicalItems;
                let itemIDWithproductId = [];
                resCartItems.forEach(function (item) {
                    productId.push(item.productId);
                    itemIDWithproductId.push(
                        {
                            "itemId": item.id,
                            "prodId": item.productId
                        }
                    )
                });

                getProductsByProductIds(productId).then(resProdcuts => {
                    let data = graphQLToJavascript(resProdcuts);
                    var customFields;

                    data.forEach(function (dataElements) {
                        if (dataElements.customFields) {
                            customFields = dataElements.customFields;
                            customFields.forEach(function (customFieldsElements) {
                                if (customFieldsElements.name == 'SSD' && customFieldsElements.value == 'yes') {
                                    itemsNotEligibleForSDD.push(dataElements.entityId);
                                }else{
                                }
                            });
                            deleteItems = itemIDWithproductId.map(function (item) {
                                if (itemsNotEligibleForSDD.includes(item.prodId) == false) {
                                    return {
                                        "id": item.itemId,
                                        "quantity": 0
                                    };
                                }
                            });
                        }
                    });
                    deleteItems = deleteItems.filter(e => e);
                    if (deleteItems.length > 0) {
                        $('.cs-address-loader-hldr').hide();
                        swal.fire({
                            text: "One or more items are not available for Same Day Delivery, would you like to remove them?",
                            icon: 'warning',
                            showCancelButton: true,
                            showDenyButton: true,
                            denyButtonText: 'NORMAL DELIVERY INSTEAD',
                            cancelButtonText: 'PICKUP IN STORE INSTEAD',
                            confirmButtonText: 'REMOVE ITEMS & CONTINUE WITH SAME DAY DELIVERY',
                            allowEscapeKey: false,
                            allowOutsideClick: false,
                            customClass: {
                                confirmButton: 'remove-pickup-items'
                            },
                        }).then(result => {
                            if (result.value && result.isConfirmed === true) {
                                deleteItems = deleteItems.filter(e => e);
                                setCookie('pickUp', 'false', '365');
                                setCookie('sameDay', 'true', '365');
                                removePickupItemsInCart(deleteItems);
                            }else if (result && result.isDenied === true){
                                $('.delivery').trigger('click');
                            }else{
                                $('.pickup').trigger('click');
                            }
                        });
                    }else{
                        setCookie('pickUp', 'false', '365');
                        setCookie('sameDay', 'true', '365');
                        $('.cs-address-loader-hldr').hide();
                        $('body #pickUpSection').hide();
                        $('body .checkout-view-content').find('.checkout-form').hide();
                        $('.buttonsWrapper .sameday').attr('disabled', true);
                        clearShippingFields();
                        $('body #sameDayDelivery').show();
                    }
                });
            });
        }

        function setOnlineAvailabilityinProdListing() {
            $('body').on('mouseenter touchstart', '#product-listing-container .productGrid .card', function (event) {
                if ($(this).find('[data-product-ccsku]').attr('data-product-ccsku') != undefined) {
                    var dataRequest = {};
                    dataRequest['SKU'] = $(this).find('[data-product-ccsku]').attr('data-product-ccsku');
                    var checkStoresQTY = ClickAndCollect.getAllStoresWithQuantity(dataRequest);
                    var haveStockinStore;
                    haveStockinStore = checkStoresQTY.filter(function (store) {
                        return store.Quantity >= 1;
                    });
                    if (haveStockinStore.length == 0) {
                        $(this).find('[data-product-ccsku]').remove();
                    }
                }
            });
            if ($('[data-product-ccsku]').length > 0) {
                $("[data-product-ccsku]").each(function (i, v) {
                    var dataRequest = {};
                    dataRequest['SKU'] = $(this).attr('data-product-ccsku');
                    var checkStoresQTY = ClickAndCollect.getAllStoresWithQuantity(dataRequest);
                    var haveStockinStore;
                    haveStockinStore = checkStoresQTY.filter(function (store) {
                        return store.Quantity >= 1;
                    });
                    if (haveStockinStore.length == 0) {
                        $(this).remove();
                    }
                });
            }
        }

        //Show alternative stores when a product is not available in the store selected
        function showAlternativeStores() {
            var alternativeStores = [];
            var alternativeStoresHTML = '';
            var storeId = getCookie("storeSelectedID");
            var qtySelected = 0;
            if($('.productView').length > 0){
                qtySelected = $('.form-input--incrementTotal').val();
            }
            $.each(Stores, function (i, store) {
                if (store.Quantity > 0 && store.Quantity >= qtySelected && storeId != store.StoreId) {
                    alternativeStores.push(store);
                }
            });
            if (alternativeStores.length > 0) {
                $.each(alternativeStores, function (i, store) {
                    if (i < 5) {
                        alternativeStoresHTML +=
                            `<li class="store">
                            <span class="setAsStore click-and-collect-primary-button" id="`+ store.StoreId + `">` + store.StoreName + `</span>
                        </li>`
                    }
                });

                $('.storeSection .alternativeStores .allAltStores').html(alternativeStoresHTML);
                $('.storeSection .alternativeStores').show();
            }
            else {
                $('.storeSection .alternativeStores').hide();
            }


        }


        function setOnlineAvailability() {
            if ($('.productView').length > 0) {
                // #region set online availability per product custom field
                let productId = $('[name=product_id]').val();
                if ((BCData.product_attributes.in_stock_attributes.length && areAllVariantsOptionsPicked()) || !BCData.product_attributes.in_stock_attributes.length) {
                    $(".variantAvailability").hide();
                    $('#sameDayDeliveryInput').removeAttr('disabled');
                    getProductsByProductIds(productId).then(res => {
                        let data = graphQLToJavascript(res);
                        let customFields = data[0].customFields;
                        let pickUpOnly = customFields.filter(function (field) {
                            if (field.name == 'in_store_pickup_only_eagle' && field.value == 'true') {
                                return field;
                            }
                        });
                        if (pickUpOnly.length == 1) {
                            //$('#form-action-addToCart').attr('disabled', 'disabled');
                            //$('#form-action-addToCart').attr('style', 'cursor: not-allowed; pointer-events: none; background-color: #ccc;border-color: rgba(0,0,255,0);');
                            $(".storeSection .onlineAvailability, .myStore .onlineAvailability")
                                .removeAttr("class")
                                .addClass("onlineAvailability notAvailable")
                                .html("Not available for shipping").append(SVG_UNAVAILABLE)
                                .show();
                            checkProductAvailability();
                        } else {
                            var haveStockinStore;
                            var qtySelected = 1;
                            var totalQuantityofStores;
                            if($('.productView').length > 0){
                                qtySelected = $('.form-input--incrementTotal').val();
                            }

                            
                            haveStockinStore = Stores.filter(function (store) {

                                totalQuantityofStores = Stores.reduce(function(sum, current){
                                    return sum + current.Quantity;
                                }, 0);

                                console.log(totalQuantityofStores);

                                if(store.Quantity >= qtySelected) {
                                    return store.Quantity >= qtySelected;
                                } else if(store.Quantity < qtySelected){
                                    if(totalQuantityofStores >= qtySelected) {
                                        return store.Quantity;
                                    } else {
                                        return "";
                                    }

                                }

                             
                            });

                            
                            if (BCData.product_attributes.purchasable && BCData.product_attributes.instock && haveStockinStore.length >= 1) {
                                //$('#form-action-addToCart').removeAttr('style');
                                $(".storeSection .onlineAvailability, .myStore .onlineAvailability")
                                    .removeAttr("class")
                                    .addClass("onlineAvailability available")
                                    .html(`Available online <span class="current-stock">Current Stock: ${totalQuantityofStores}</span>`).append(SVG_AVAILABLE)
                                    .show();
                            } else {
                                if (trackingInventroy == "True") {
                                   // $('#form-action-addToCart').attr('disabled', 'disabled');
                                    //$('#form-action-addToCart').attr('style', 'cursor: not-allowed; pointer-events: none; background-color: #ccc;border-color: rgba(0,0,255,0);');
                                    $(".storeSection .onlineAvailability, .myStore .onlineAvailability")
                                        .removeAttr("class")
                                        .addClass("onlineAvailability notAvailable")
                                        .html("Not available for shipping").append(SVG_UNAVAILABLE)
                                        .show();
                                } else {
                                   // $('#form-action-addToCart').removeAttr('style');
                                    $(".storeSection .onlineAvailability, .myStore .onlineAvailability")
                                        .removeAttr("class")
                                        .addClass("onlineAvailability available")
                                        .html(`Available online <span class="current-stock">Current Stock: ${haveStockinStore[0].Quantity}</span>`).append(SVG_AVAILABLE)
                                        .show();
                                }
                            }
                            checkProductAvailability();
                        }
                    });
                } else {
                    $(".availability, .onlineAvailability").hide();
                    $(".variantAvailability").show();
                    checkProductAvailability();
                }
                // #endregion
            } else {
                $('#form-action-addToCart').removeAttr('style');
                $(".storeSection .onlineAvailability, .myStore .onlineAvailability")
                    .removeAttr("class")
                    .addClass("onlineAvailability available")
                    .html("Available online").append(SVG_AVAILABLE)
                    .show();
            }

        }

        function setAvailability(dataRequest) {
            var storeName = $('body .clickandcollect-header .setStore .title').html();
            var qtySelected = 0;
            if($('.productView').length > 0){
                qtySelected = $('.form-input--incrementTotal').val();
            }
            if (trackingInventroy == "True") {
                var availability;
                availability = ClickAndCollect.getstoreproductavailability(dataRequest);
                if (availability == 'Product not found' || availability.Quantity <= 0) {
                    $("body .storeSection .availability,body .myStore .availability")
                        .removeAttr("class")
                        .addClass("availability notAvailable click-and-collect-unavailable-text")
                        .html("Unavailable In-Store")
                        .show();
                    $("body .storeSection .availability").append(SVG_UNAVAILABLE);
                    $(".storeSection .chooseStore").show();
                    showAlternativeStores();
                }else if (availability.Quantity == qtySelected){
                    $("body .storeSection .availability, .myStore .availability")
                        .removeAttr("class")
                        .addClass("availability available click-and-collect-available-text")
                        .html(`Available In-Store <span class="current-stock">Current Stock: ${availability.Quantity}</span>`)
                        .show();
                    $("body .storeSection .availability").append(SVG_AVAILABLE);
                }else if(availability.Quantity < qtySelected){
                    $("body .storeSection .availability,body .myStore .availability")
                        .removeAttr("class")
                        .addClass("availability notAvailable click-and-collect-unavailable-text")
                        .html("Not enough stock in-store")
                        .show();
                    $("body .storeSection .availability").append(SVG_UNAVAILABLE);
                    $(".storeSection .chooseStore").show();
                    showAlternativeStores();
                }
                else {
                    $("body .storeSection .availability, .myStore .availability")
                        .removeAttr("class")
                        .addClass("availability available click-and-collect-available-text")
                        .html(`Available In-Store <span class="current-stock">Current Stock: ${availability.Quantity}</span>`)
                        .show();
                    $("body .storeSection .availability").append(SVG_AVAILABLE);
                    // $(".storeSection .chooseStore").hide();
                }
            }
            else {
                $("body .storeSection .availability, .myStore .availability")
                    .removeAttr("class")
                    .addClass("availability available click-and-collect-available-text")
                    .html(`Available In-Store <span class="current-stock">Current Stock: ${availability.Quantity}</span>`)
                    .show();
                $("body .storeSection .availability").append(SVG_AVAILABLE);
                // $(".storeSection .chooseStore").hide();
            }

            hidePlaceholder();
            $(".availability, .onlineAvailability").show();
        }

        function areAllVariantsOptionsPicked() {
            var $formFields = $("form[data-cart-item-add] .form-field");
            var areAllVariantsOptionsPicked = true;

            $formFields.each((index, item) => {
                var formItem;
                if ($(item).attr("data-product-attribute") === "set-radio"
                    || $(item).attr("data-product-attribute") === "set-rectangle"
                    || $(item).attr("data-product-attribute") === "swatch") {
                    formItem = $(item).find(".form-radio:checked");
                    if (!formItem.length) {
                        areAllVariantsOptionsPicked = false;
                    }
                } else if ($(item).attr("data-product-attribute") === "set-select") {
                    formItem = $(item).find("select");
                    if (!$(formItem).val()) {
                        if (formItem) areAllVariantsOptionsPicked = false;
                    }
                }
            });

            return areAllVariantsOptionsPicked;
        }

        // #region Check Variants Availability
        function showPlaceholder() {
            $(".placeholder_content").show();
            $('#form-action-addToCart').attr('disabled', 'disabled');
            $('#form-action-addToCart').attr('style', 'cursor: not-allowed; pointer-events: none; background-color: #ccc;border-color: rgba(0,0,255,0);');
        };

        function hidePlaceholder() {
            $(".placeholder_content").hide();
        }

        function getAvailabiltyFromCnC(optionID = []) {
            return $.post(
                {
                    url: ClickAndCollect.getBaseUrl() + "/api/v1/Product/CheckAvailabilityOfVariants",
                    data: {
                        "ProductId": $('[name=product_id]').val() || null,
                        "SKU": BCData.product_attributes.sku || null,
                        "SelectedOptionIds": optionID
                    }
                }
            );
        }

        function setVariantsAvailability(optionID = []) {
            getAvailabiltyFromCnC(optionID).then(res => {
                $('[data-product-attribute-value]').each(function (key) {
                    if (res.OptionIds.includes(parseInt($(this).attr('data-product-attribute-value')))) {
                        $(this).removeAttr('disabled', 'disabled');
                        $(this).removeClass('unavailable');
                    } else {
                        $(this).attr('disabled', 'disabled');
                        $(this).addClass('unavailable');
                    }
                });
            });
        }

        function getAllVariantsOptionsPicked() {
            var $formFields = $("form[data-cart-item-add] .form-field");

            var formItem = [];
            $formFields.each((index, item) => {
                if ($(item).attr("data-product-attribute") === "set-radio"
                    || $(item).attr("data-product-attribute") === "set-rectangle"
                    || $(item).attr("data-product-attribute") === "swatch") {
                    formItem.push(parseInt($(item).find(".form-radio:checked").val()));
                } else if ($(item).attr("data-product-attribute") === "set-select") {
                    formItem.push(parseInt($(item).find(":selected").val()));
                }
            });

            return formItem.filter((a) => a);
        }
        // #endregion

        // #region graphQL

        let QUERY_HEADERS = {
            url: "/graphql",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${api_token}`,
            },
            dataType: "json",
        };

        function getCartItemsAsync() {
            var settings = {
                "crossDomain": true,
                "url": "/api/storefront/carts",
                "method": "GET",
                "headers": {}
            }

            return $.ajax(settings);
        }

        function queryPost(query) {
            return $.post({
                ...QUERY_HEADERS,
                data: JSON.stringify(query),
            });
        }

        function graphQLToJavascript(graphQLResult) {
            let root;
            if (graphQLResult.data.site.route) {
                root = graphQLResult.data.site.route.node
            } else if (graphQLResult.data.site.products) {
                root = graphQLResult.data.site.products;
            }
            let filteredResult = removeNodeAndEdges(root);

            if (graphQLResult.data.site.products?.pageInfo) {
                let final = {};
                final["products"] = filteredResult;
                final["pageInfo"] = graphQLResult.data.site.products.pageInfo;
                return final;
            }

            return filteredResult;
        }

        function removeNodeAndEdges(root, parent = null) {
            Object.keys(root).forEach((key) => {
                if (typeof root[key] == "object" && root[key]) {
                    if (Array.isArray(root[key])) {
                        root = root[key];
                        root = root.map((entry) => entry.node);
                        root = removeNodeAndEdges(root);
                    } else {
                        root[key] = removeNodeAndEdges(root[key], root);
                    }
                }
            });
            return root;
        }

        function getProductsByProductIds(productIds, pagination) {
            let after = pagination ? `, after: "${pagination}"` : "";
            let query = {
                query: `query Products {
            site {
              products(entityIds: [${productIds}]${after}) {
                edges {
                  node {
                    entityId
                    name
                    customFields {
                      edges {
                        node {
                          entityId
                          name
                          value
                        }
                      }
                    }
                  }
                }
              }
            }
          }`,
            };
            return queryPost(query);
        }
        // #endregion graphQL
        
        function setProductAvailability() {
            if ($('.productView').length > 0) {
                var dataRequest = {};
                var onlineDataRequest = {};
                var sku;
                var storeId = getCookie("storeSelectedID");

                if ($('[data-product-sku]').html().trim().length > 0) {
                    sku = $('[data-product-sku]').html();
                    dataRequest.SKU = sku;
                    dataRequest.storeid = storeId;

                    onlineDataRequest.SKU = sku;
                    if (storeId.length > 0) {
                        setAvailability(dataRequest);
                        setOnlineAvailability();
                    }
                    else {
                        setOnlineAvailability();
                    }
                }

                if (BCData.product_attributes.in_stock_attributes.length) {
                    setVariantsAvailability();
                }
                
            }
            else if ($('[data-cart-content]').length > 0) {

                updateAvailabilityInCart();

                removeShippingCountries();

                $(".cart-item").each(function () {
                    $(this).find("[data-cart-update]").on("click", function () {
                        setTimeout(() => {
                            location.reload();
                        }, 1000);
                    });
                    $(this).find(".cart-remove.icon").on("click", function () {
                        $(".swal2-confirm.button").on('click', function () {
                            setTimeout(() => {
                                location.reload();
                            }, 1000);
                        });
                    });
                });
            }

            hidePlaceholder();
        }

        function updateAvailabilityInCart() {
            if (trackingInventroy == "True") {
                var availabilityOfAllProducts = true;
                var storeId = getCookie('storeSelectedID');
                $('.onlineAvailability').next('span').show();
                var storeDomain = window.location.origin;
                var cartItems;
                $.ajax({
                    async: false,
                    crossDomain: true,
                    url: "" + storeDomain + "/api/storefront/carts?include=lineItems.digitalItems.options%2ClineItems.physicalItems.options",
                    method: "GET",
                    headers: {},
                    success: function (response) {
                        cartItems = response[0].lineItems.physicalItems
                        $('.cart-item-sku').each(function (index, itemName) {
                            var cartItem = cartItems.find(res => res.sku == $(itemName).text().trim());
                            $(itemName).parent().children('.cart-item-title').find('.onlineAvailability').attr('sku', cartItem.sku);
                            $(itemName).parent().children('.cart-item-title').find('.onlineAvailability').attr('productId', cartItem.productId);
                            $(itemName).parent().children('.cart-item-title').find('.availability').attr('sku', cartItem.sku);
                        });
                    },
                    error: function (response) {
                    },
                });
                if (storeId.length > 0) {

                    $(".cart-item .availability").each(function () {
                        var dataRequest = {};
                        var quantity = $(this).parent().parent(".cart-item").children(".cart-item-quantity").find("input").val();
                        var sku = $(this).attr("sku");
                        dataRequest.SKU = sku;
                        dataRequest.storeid = storeId;
                        console.log(dataRequest);
                        var availability = ClickAndCollect.getstoreproductavailability(dataRequest);
                        if (availability == 'Product not found' || availability.Quantity <= 0) {
                            $(this)
                                .removeAttr("class")
                                .addClass("availability notAvailable")
                                .html("Unavailable in Selected Store")
                                .show();
                            availabilityOfAllProducts = false;
                        }
                        else if (availability.Quantity < quantity) {
                            $(this)
                                .removeAttr("class")
                                .addClass("availability notAvailable")
                                .html("Not enough quantity in the selected store")
                                .show();
                            availabilityOfAllProducts = false;
                        }
                        else {
                            $(this)
                                .removeAttr("class")
                                .addClass("availability available")
                                .html("Available in Selected Store")
                                .show();
                        }
                    });
                }
                else {
                    $('.onlineAvailability').next('span').hide();
                }
                $(".cart-item .onlineAvailability").each(function () {
                    var productId = $(this).attr("productId");
                    getProductsByProductIds(productId).then(res => {
                        let data = graphQLToJavascript(res);
                        let customFields = data[0].customFields;
                        let pickUpOnly = customFields.filter(function (field) {
                            if (field.name == 'in_store_pickup_only_eagle' && field.value == 'true') {
                                return field;
                            }
                        });
                        // console.log(pickUpOnly, productId)
                        if (pickUpOnly.length == 1) {
                            $(this)
                                .removeAttr("class")
                                .addClass("onlineAvailability notAvailable")
                                .html("Not available for shipping")
                                .show();
                        } else {
                            var dataRequest = {};
                            var quantity = $(this).parent().parent(".cart-item").children(".cart-item-quantity").find("input").val();
                            var sku = $(this).attr("sku");
                            dataRequest['SKU'] = sku;
                            var checkStoresQTY = ClickAndCollect.getAllStoresWithQuantity(dataRequest);
                            var haveStockinStore;
                            // haveStockinStore = checkStoresQTY.filter(function (store) {
                            //     return store.Quantity >= quantity;
                            // });

                            haveStockinStore = checkStoresQTY.filter(function (store) {

                                var totalQuantityofStores = checkStoresQTY.reduce(function(sum, current){
                                    return sum + current.Quantity;
                                }, 0);

                                console.log(totalQuantityofStores);

                                if(store.Quantity >= quantity) {
                                    return store.Quantity >= quantity;
                                } else if(store.Quantity < quantity){
                                    if(totalQuantityofStores >= quantity) {
                                        return store.Quantity;
                                    } else {
                                        return "";
                                    }

                                }

                             
                            });


                            if (haveStockinStore.length == 0) {
                                $(this)
                                    .removeAttr("class")
                                    .addClass("onlineAvailability notAvailable")
                                    .html("Not available for shipping")
                                    .show();
                            } else {
                                $(this)
                                    .removeAttr("class")
                                    .addClass("onlineAvailability available")
                                    .html("Available online")
                                    .show();
                            }
                        }
                    });


                });
                //hide applepay from cart if one or more items are not available in the store selected
                if (availabilityOfAllProducts == false) {
                    console.log("hide Apple pay");
                    $(".cart-additionalCheckoutButtons .apple-pay-checkout-button").hide();
                    $("#pickUpInfo").html("One or more items are not available to pickup at the selected store");
                }
                else {
                    console.log("show Apple pay");
                }
            }
            else {
                $('.onlineAvailability').next('span').hide();
            }
        }

        function checkProductAvailability(){
            if ($('.productView').length > 0) {
                if($(".productView .availability.notAvailable, .productView .onlineAvailability.notAvailable").length == 2){
                    $('#form-action-addToCart').attr('disabled', 'disabled');
                    $('#form-action-addToCart').attr('style', 'cursor: not-allowed; pointer-events: none; background-color: #ccc;border-color: rgba(0,0,255,0);');
                }else{
                    console.log('remove')
                    $('#form-action-addToCart').removeAttr('disabled');
                    $('#form-action-addToCart').removeAttr('style');
                }
                checkIfProductIsExistingToAnyStores();
            }
        }

        function removeShippingCountries() {
            $('#shipping-country > option:contains("United States Minor Outlying Islands")').remove();
            $('#shipping-country > option:not(:contains("United States"))').remove();
            $("#shipping-country").prepend("<option value='' selected='selected'>Select country</option>");
        }
        function checkIfProductIsExistingToAnyStores(){
            var storeId = getCookie("storeSelectedID");
            if (storeId.length == 0) {
                console.log('hello')
                var haveStockinStore;
                var qtySelected = 1;
                if($('.productView').length > 0){
                    qtySelected = $('.form-input--incrementTotal').val();
                }
                haveStockinStore = Stores.filter(function (store) {
                    return store.Quantity >= qtySelected;
                });
                console.log(haveStockinStore.length, "haveStockinStore.length")
                if (haveStockinStore.length >= 1) {
                    $('#form-action-addToCart').removeAttr('style');
                }else{
                    $('#form-action-addToCart').attr('disabled', 'disabled');
                    $('#form-action-addToCart').attr('style', 'cursor: not-allowed; pointer-events: none; background-color: #ccc;border-color: rgba(0,0,255,0);');
                }
            }
        }

        function showSDDLoader(){
            $('body .custom-loader').show();
            $('body .availability-text').hide();
        }

        function refreshSDDAvailability(){
            let google_address = JSON.parse(localStorage.getItem('google_address'));
            console.log(google_address, "google_address2323");
            if(google_address){
                $('body .custom-loader').show();
                $('body .availability-text').hide();
                let request = {};
                let products = [];
                let productObject = {};
                let address = {};
                let zone;
                let availabilityClass= '.availability-text';
                $('body [data-product-sku]').html();
                if($(productComponent).length>0) {
                    productObject.sku = $('body [data-product-sku]').html();
                    productObject.quantity = $('body .form-input--incrementTotal').val();
                    products.push(productObject);
                }
                if($(cartComponent).length>0) {
                    availabilityClass = ".availability-text-cart";
                    getCartItemsAsync().then((res) => {
                        let resCartItems = res[0].lineItems.physicalItems;
                        let products = [];
                        let productObject = {};
                        resCartItems.forEach(function (item) {
                            productObject.sku = item.sku;
                            productObject.quantity = item.quantity;
                            products.push(productObject);
                        });
                    });
                }
                request.products = products;
                request.address = 
                {
                    street_number: google_address.street_number,
                    street_address: google_address.street_address,
                    country : google_address.country,
                    city : google_address.city,
                    state : google_address.state,
                    postalCode: google_address.postalCode
                }
                console.log('checking');
                console.log(request);
                setTimeout(() => {
                    zone = ClickAndCollect.getZone(request);
                    console.log('done checking');
                    console.log(zone);
                    if(zone) {
                        $('body .custom-loader').hide();
                        $('body .sameDayDeliveryResult '+availabilityClass+' .click-and-collect-available-icon').show();
                        $('body .sameDayDeliveryResult '+availabilityClass+' .click-and-collect-unavailable-icon').hide();

                        $('body .sameDayDeliveryResult '+availabilityClass).append(SVG_AVAILABLE);
                        if(availabilityClass ==  ".availability-text-cart"){
                            $('body .sameDayDeliveryResult '+availabilityClass+' .availability-sdd').text('Available for Same Day Delivery for this address');
                            
                        }else{
                            $('body .sameDayDeliveryResult '+availabilityClass+' .availability-sdd').text('Available');
                            
                        }
                        
                        $('body .sameDayDeliveryResult').show();
                        $('body .sameDayDeliveryResult '+availabilityClass).show();
                    }
                    else {
                        $('body .custom-loader').hide();
                        $('body .sameDayDeliveryResult '+availabilityClass).append(SVG_UNAVAILABLE);
                        $('body .sameDayDeliveryResult '+availabilityClass+' .click-and-collect-available-icon').hide();
                        $('body .sameDayDeliveryResult '+availabilityClass+' .click-and-collect-unavailable-icon').show();
                        if(availabilityClass ==  ".availability-text-cart"){
                            $('body .sameDayDeliveryResult '+availabilityClass+' .availability-sdd').text('Not available for Same Day Delivery for this address');
                            
                        }else{
                            $('body .sameDayDeliveryResult '+availabilityClass+' .availability-sdd').text('Unavailable');
                            
                        }
                        $('body .sameDayDeliveryResult').show();
                        $('body .sameDayDeliveryResult '+availabilityClass).show();
                    }
                }, 500);
            }
        }   

        function frontEndFunctionality() {
            if($('.productView').length > 0){
                checkifSDDProduct([$('[name="product_id"]').val()]);
            }
            $('[data-product-sku]').on("DOMNodeInserted", function () {
                var dataRequest = {};
                    var onlineDataRequest = {};
                    var sku;
                    var storeId = getCookie("storeSelectedID");
                setVariantsAvailability(getAllVariantsOptionsPicked());
                if (BCData.product_attributes.in_stock_attributes.length && areAllVariantsOptionsPicked()) {
                    showPlaceholder(); refreshSDDAvailability();
                    $(".availability, .onlineAvailability").hide();
            
                    sku = $('[data-product-sku]').html();
                    dataRequest.SKU = sku;
                    dataRequest.storeid = storeId;
            
                    onlineDataRequest.SKU = sku;
            
                    if (storeId.length > 0) {
                        setAvailability(dataRequest);
                        setOnlineAvailability();
                    }
                    else {
                        setOnlineAvailability();
                    }
                } else if (!BCData.product_attributes.in_stock_attributes.length) {
                    sku = $('[data-product-sku]').html();
                    dataRequest.SKU = sku;
                    dataRequest.storeid = storeId;
            
                    onlineDataRequest.SKU = sku;
                    if (storeId.length > 0) {
                        setAvailability(dataRequest);
                        setOnlineAvailability();
                    }
                    else {
                        setOnlineAvailability();
                    }
                }
            
                hidePlaceholder();
                $(".availability, .onlineAvailability").show();
            });

            $("body").on("keyup", ".form-input.form-input--incrementTotal", (e) => {
                var typingTimer;                //timer identifier
                var doneTypingInterval = 500;  //time in ms
                clearTimeout(typingTimer);
                if ($(".form-input.form-input--incrementTotal").val()) {
                    typingTimer = setTimeout(function () {
                        showPlaceholder(); refreshSDDAvailability();
                        $(".availability, .onlineAvailability").hide();
                        $(".variantAvailability").hide();
                        $('#sameDayDeliveryInput').removeAttr('disabled');
                        setTimeout(() => {
                            setProductAvailability();
                            if($(cartComponent).length>0) {
                                $('main[data-cart]').on("DOMSubtreeModified", function () {
                                    if($('.loadingOverlay').attr('style') == 'display: block;'){
                                        console.log('change cart contentheading 12121', $('.loadingOverlay').attr('style'));
                                        location.reload();
                                    }
                                });
                            }
                        }, 2000);
                        
                    }, doneTypingInterval);
                }
            });

            $("body").on("click", "button.cart-remove.icon", (e) => {
				if($(cartComponent).length>0) {
                    $('main[data-cart]').on("DOMSubtreeModified", function () {
                        if($('.loadingOverlay').attr('style') == 'display: block;'){
                            console.log('change cart contentheading 12121', $('.loadingOverlay').attr('style'));
                            location.reload();
                        }
                    });
               }
			});



            // $("body").on("change", "form[data-cart-item-add]", (e) => {
            $('body').on('change', 'div[data-product-option-change] input[type=radio], div[data-product-option-change] select', function () {
                if ((BCData.product_attributes.in_stock_attributes.length && areAllVariantsOptionsPicked()) || (getCookie('storeSelectedID') && !BCData.product_attributes.in_stock_attributes.length )) {
                    showPlaceholder(); showSDDLoader();
                    $(".availability, .onlineAvailability").hide();
                    $(".variantAvailability").hide();
                    $('#sameDayDeliveryInput').removeAttr('disabled');
                    setTimeout(() => {
                        setProductAvailability();
                    }, 2000);
                }

            });
            $('body').on('click', '.showDetails', function () {
                $(this).toggleClass('is-shown');
                $(this).parent().children('.storeDetails').slideToggle();
                if ($(this).hasClass('is-shown')) {
                    $(this).children('.text').html('Less Details');
                }
                else {
                    $(this).children('.text').html('View Store Details');
                }
                $(this).children('svg').toggleClass('rotate-img');
                if ($(this).parent().find('iframe').length == 0) {
                    $(this).parent().find('.storeMap').html($(this).parent().find('.storeMap').attr('data-storeMap'))
                }
            });

            $('body').on('click', '.hideDetails', function () {
                $(this).parent('.storeDetails').slideToggle();
                $('.store .showDetails').show();
                $('.store .allStoreDetails').hide();
                $(this).parent().prev().children('.showDetails').show();
            });

            $('body').on('click', '.setStoreWrapper .setStore', function (e) {
                e.stopPropagation();
                $('.storesDropdown').addClass('isOpen');
                $('body').css('overflow-y', 'hidden');
                showingAllStoresByDefault();
            });

            $('body').on('click', '.storesDropdown', function (e) {
                e.stopPropagation();
            });

            $('body').on('click', '.storesDropdown .close', function () {
                $('.storesDropdown').removeClass('isOpen');
                $('body').css('overflow-y', 'scroll');
                $('#storeInputHeader').val('');
                $('.storesDropdown >.content').html('');
                $('#modal').removeClass('noZindex');
                $('.modal-background').removeClass('noZindex');
            });

            $('body').on('click', '.alternativeStores .setAsStore', function () {
                $('body .storeSection .alternativeStores').hide();
            });

            $('body').on('click', '.form-option-variant.form-option-variant--color, .form-option-variant.form-option-variant--pattern', function () {
                var title = $(this).attr('title');
                $('[selected-option-value]').html(title);
            });

            $('.click-and-collect-mobile').on('click', function () {
                $('.storesDropdown').addClass('isOpen');
                showingAllStoresByDefault();
            });

            $('body').on('click', '.chooseStore', function () {
                $('.storesDropdown').addClass('isOpen');
                $('body').css('overflow-y', 'hidden');
                showingAllStoresByDefault();
            });

            $('body').on('click', '.modal-body.quickView .chooseStore', function () {
                $('#modal').addClass('noZindex');
                $('.modal-background').addClass('noZindex');
            });

            $('body').on('click', '.click-and-collect-overlay', function () {
                $('body .storesDropdown.isOpen .close').trigger('click');
            });
        }
        function showingAllStoresByDefault() {

            var newlist = [];
            $.each(Stores, function (i, store) {
                newlist.push(store);
            });
            //Sort alphabetically
            newlist.sort(function (a, b) {
                return a.StoreName.localeCompare(b.StoreName);
            });

            if (newlist.length > 0) {
                foundStores = `<ul class="stores">`;

                for (var i = 0; i < newlist.length; i++) {
                    var availabilityHTML = '';
                    if ($('.productView').length > 0) {
                        if ($('[data-product-sku]').html().trim().length > 0) {
                            if (trackingInventroy == "True") {
                                if (newlist[i].Quantity > 0) {
                                    availabilityHTML = `<span class="availability available click-and-collect-available-text">Available</span>`
                                }
                                else {
                                    availabilityHTML = `<span class="availability notAvailable click-and-collect-unavailable-text">Not Available</span>`
                                }
                            }
                            else {
                                availabilityHTML = `<span class="availability available click-and-collect-available-text">Available</span>`
                            }
                        }
                    }
                    var OpenTimeMonday = (newlist[i].OpenTimeMonday != '' && newlist[i].CloseTimeMonday != '' ? newlist[i].OpenTimeMonday + ` - ` + newlist[i].CloseTimeMonday : 'Closed');
                    var OpenTimeTuesday = (newlist[i].OpenTimeTuesday != '' && newlist[i].CloseTimeTuesday != '' ? newlist[i].OpenTimeTuesday + ` - ` + newlist[i].CloseTimeTuesday : 'Closed');
                    var OpenTimeWednesday = (newlist[i].OpenTimeWednesday != '' && newlist[i].CloseTimeWednesday != '' ? newlist[i].OpenTimeWednesday + ` - ` + newlist[i].CloseTimeWednesday : 'Closed');
                    var OpenTimeThursday = (newlist[i].OpenTimeThursday != '' && newlist[i].CloseTimeThursday != '' ? newlist[i].OpenTimeThursday + ` - ` + newlist[i].CloseTimeThursday : 'Closed');
                    var OpenTimeFriday = (newlist[i].OpenTimeFriday != '' && newlist[i].CloseTimeFriday != '' ? newlist[i].OpenTimeFriday + ` - ` + newlist[i].CloseTimeFriday : 'Closed');
                    var OpenTimeSaturday = (newlist[i].OpenTimeSaturday != '' && newlist[i].CloseTimeSaturday != '' ? newlist[i].OpenTimeSaturday + ` - ` + newlist[i].CloseTimeSaturday : 'Closed');
                    var OpenTimeSunday = (newlist[i].OpenTimeSunday != '' && newlist[i].CloseTimeSunday != '' ? newlist[i].OpenTimeSunday + ` - ` + newlist[i].CloseTimeSunday : 'Closed');
                    var store_hours_info = `<span class="info">
                                        <p>Mon: `+ OpenTimeMonday + `</p>
                                        <p>Tue: `+ OpenTimeTuesday + `</p>
                                        <p>Wed: `+ OpenTimeWednesday + `</p>
                                        <p>Thu: `+ OpenTimeThursday + `</p>
                                        <p>Fri: `+ OpenTimeFriday + `</p>
                                        <p>Sat: `+ OpenTimeSaturday + `</p>
                                        <p>Sun: `+ OpenTimeSunday + `</p>
                                </span>`;
                    var googleMap = '';
                    if (newlist[i].StoreMap != '' && newlist[i].StoreMap.includes('<iframe')) {
                        googleMap = $(newlist[i].StoreMap);
                        $(googleMap).attr('width', '100%');
                        $(googleMap).attr('height', '200px');
                        googleMap = googleMap[0].outerHTML;
                    }
                    foundStores +=
                        `<li class="store" storeid='` + newlist[i].StoreId + `'>
                        <div class="content">
                        `+ availabilityHTML + `
                        <p class="name">`+ newlist[i].StoreName + `</p>
                        <span storelat=`+ newlist[i].Latitude + ` storelon=` + newlist[i].Longitude + ` class="distance"></span>
                        <p class="address">`+ newlist[i].StateAddress + ' ' + newlist[i].City + ' ' + newlist[i].State + ' ' + newlist[i].ZipCode + `</p>
                        <button class="click-and-collect-primary-button setAsStore" id=`+ newlist[i].StoreId + `>Set as Store</button>
                        <button class="click-and-collect-secondary-button button--secondary showDetails"><span class=text>View Store Details</span>
                        <svg class="click-and-collect-details-arrow-icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            width="451.847px" height="451.847px" viewBox="0 0 451.847 451.847" style="enable-background:new 0 0 451.847 451.847;"
                            xml:space="preserve">
                            <path d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
                                c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
                                c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"/>
                        </svg>
                        </button>
                        <div class="storeDetails" style="display:none">
                            <div class="details">
                                <div class="address">
                                <label>Store Hours</label>
                                `+ store_hours_info + `
                                </div>
                                <div class="phone">
                                    <span class="info">
                                        <a href="tel:`+ newlist[i].StorePhone + `">` + newlist[i].StorePhone + `</a>
                                        <a href="mailto:`+ newlist[i].StoreEmail + `">` + newlist[i].StoreEmail + `</a>
                                    </span>
                                </div>
                            </div>
                            
                            <div class="storeMap" storeID="`+ newlist[i].StoreId + `" style="width: 100%" data-storeMap='` + googleMap + `'>
                            </div>
        
                        </div>
                    </div>
                        </li>`
                }
                foundStores += `</ul>`;
                $('body .storesDropdown .content').html(foundStores);
            }

            var liStore = $(".storesDropdown .stores li.store");

            liStore.each(function(store) {
                if($(this).attr("storeid") == "f5d93912-da23-4949-9006-aaeeeea6f3f0" || $(this).find('.name').html() == 'E-Commerce') {
                    $(this).hide();
                } 
            });

        }

        function storesFiltering() {
            //setup before functions
            var typingTimer;                //timer identifier
            var doneTypingInterval = 500;  //time in ms
            var Input;
            var newlist = [];
            var foundStores;
            var myLat;
            var myLon;
            $('body').on('keyup', '#storeInputHeader', function () {
                var geoLocation;
                newlist = []
                clearTimeout(typingTimer);
                if ($('#storeInputHeader').val()) {
                    typingTimer = setTimeout(function () {
                        Input = $("#storeInputHeader").val().trim();
                        var request = {};
                        request.Input = Input;
                        geoLocation = ClickAndCollect.getLatAndLong(request);
                        console.log(geoLocation);
                        if (geoLocation.Latitude != null) {
                            myLat = geoLocation.Latitude;
                            myLon = geoLocation.Longitude;
                            setCookie('myLat', myLat, 7);
                            setCookie('myLon', myLon, 7);
                            $.each(Stores, function (i, store) {
                                newlist.push(store);
                            });
                        }
                        else {
                            newlist = [];
                        }
                        $.each(Stores, function (i, v) {
                            if ((v.StoreName.toLowerCase()).indexOf(Input.toLowerCase()) >= 0 ||
                                (v.StateAddress.toLowerCase()).indexOf(Input.toLowerCase()) >= 0 ||
                                (v.City.toLowerCase()).indexOf(Input.toLowerCase()) >= 0 ||
                                (v.State.toLowerCase()).indexOf(Input.toLowerCase()) >= 0) {
                                newlist.push(v);
                            }
                        });
                        if (newlist.length > 0) {
                            foundStores = `<ul class="stores">`;

                            for (var i = 0; i < newlist.length; i++) {
                                var availabilityHTML = '';
                                if ($('body .productView').length > 0) {
                                    if ($('body [data-product-sku]').html().trim().length > 0) {
                                        if (trackingInventroy == "True") {
                                            if (newlist[i].Quantity > 0) {
                                                availabilityHTML = `<span class="availability available click-and-collect-available-text">Available</span>`
                                            }
                                            else {
                                                availabilityHTML = `<span class="availability notAvailable click-and-collect-unavailable-text">Not Available</span>`
                                            }
                                        }
                                        else {
                                            availabilityHTML = `<span class="availability available click-and-collect-available-text">Available</span>`
                                        }
                                    }
                                }
                                var OpenTimeMonday = (newlist[i].OpenTimeMonday != '' && newlist[i].CloseTimeMonday != '' ? newlist[i].OpenTimeMonday + ` - ` + newlist[i].CloseTimeMonday : 'Closed');
                                var OpenTimeTuesday = (newlist[i].OpenTimeTuesday != '' && newlist[i].CloseTimeTuesday != '' ? newlist[i].OpenTimeTuesday + ` - ` + newlist[i].CloseTimeTuesday : 'Closed');
                                var OpenTimeWednesday = (newlist[i].OpenTimeWednesday != '' && newlist[i].CloseTimeWednesday != '' ? newlist[i].OpenTimeWednesday + ` - ` + newlist[i].CloseTimeWednesday : 'Closed');
                                var OpenTimeThursday = (newlist[i].OpenTimeThursday != '' && newlist[i].CloseTimeThursday != '' ? newlist[i].OpenTimeThursday + ` - ` + newlist[i].CloseTimeThursday : 'Closed');
                                var OpenTimeFriday = (newlist[i].OpenTimeFriday != '' && newlist[i].CloseTimeFriday != '' ? newlist[i].OpenTimeFriday + ` - ` + newlist[i].CloseTimeFriday : 'Closed');
                                var OpenTimeSaturday = (newlist[i].OpenTimeSaturday != '' && newlist[i].CloseTimeSaturday != '' ? newlist[i].OpenTimeSaturday + ` - ` + newlist[i].CloseTimeSaturday : 'Closed');
                                var OpenTimeSunday = (newlist[i].OpenTimeSunday != '' && newlist[i].CloseTimeSunday != '' ? newlist[i].OpenTimeSunday + ` - ` + newlist[i].CloseTimeSunday : 'Closed');
                                var store_hours_info = `<span class="info">
                                        <p>Mon: `+ OpenTimeMonday + `</p>
                                        <p>Tue: `+ OpenTimeTuesday + `</p>
                                        <p>Wed: `+ OpenTimeWednesday + `</p>
                                        <p>Thu: `+ OpenTimeThursday + `</p>
                                        <p>Fri: `+ OpenTimeFriday + `</p>
                                        <p>Sat: `+ OpenTimeSaturday + `</p>
                                        <p>Sun: `+ OpenTimeSunday + `</p>
                                </span>`;
                                var googleMap = '';
                                if (newlist[i].StoreMap != '' && newlist[i].StoreMap.includes('<iframe')) {
                                    googleMap = $(newlist[i].StoreMap);
                                    $(googleMap).attr('width', '100%');
                                    $(googleMap).attr('height', '200px');
                                    googleMap = googleMap[0].outerHTML;
                                }
                                foundStores +=
                                    `<li class="store" storeid='` + newlist[i].StoreId + `'>
                                    <div class="content">
                                    `+ availabilityHTML + `
                                    <p class="name">`+ newlist[i].StoreName + `</p>
                                    <span storelat=`+ newlist[i].Latitude + ` storelon=` + newlist[i].Longitude + ` class="distance"></span>
                                    <p class="address">`+ newlist[i].StateAddress + ' ' + newlist[i].City + ' ' + newlist[i].State + ' ' + newlist[i].ZipCode + `</p>
                                    <button class="click-and-collect-primary-button setAsStore" id=`+ newlist[i].StoreId + `>Set as Store</button>
                                    <button class="click-and-collect-secondary-button button--secondary showDetails"><span class=text>View Store Details</span>
                                    <svg class="click-and-collect-details-arrow-icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                        width="451.847px" height="451.847px" viewBox="0 0 451.847 451.847" style="enable-background:new 0 0 451.847 451.847;"
                                        xml:space="preserve">
                                        <path d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
                                            c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
                                            c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"/>
                                    </svg>
                                    </button>
                                    <div class="storeDetails" style="display:none">
                                        <div class="details">
                                            <div class="address">
                                                <label>Store Hours</label>
                                                `+ store_hours_info + `
                                            </div>
                                            <div class="phone">
                                                <span class="info">
                                                    <a href="tel:`+ newlist[i].StorePhone + `">` + newlist[i].StorePhone + `</a>
                                                    <a href="mailto:`+ newlist[i].StoreEmail + `">` + newlist[i].StoreEmail + `</a>
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <div class="storeMap" storeID="`+ newlist[i].StoreId + `" style="width: 100%" data-storeMap='` + googleMap + `'>
                                        </div>
                    
                                    </div>
                                </div>
                                    </li>`
                            }
                            foundStores += `</ul>`;

  


                            $('body .storesDropdown .content').html(foundStores);

                            var liStore = $("body .stores li.store");

                            liStore.each(function(store) {
                                if($(this).attr("storeid") == "f5d93912-da23-4949-9006-aaeeeea6f3f0" || $(this).find('.name').html() == 'E-Commerce') {
                                    $(this).hide();
                                } 
                            });

                            $('body .stores [storelat][storelon]').each(function (e) {
                                var storeLat = $(this).attr('storelat');
                                var storeLon = $(this).attr('storelon');
                                var d = distance(myLat, myLon, storeLat, storeLon);
                                if (d != "NaN km") {
                                    $(this).html(d);
                                    $(this).parent().parent('.store').attr('sorting', d.replace('km', ''));
                                }
                            });

                            $('body .stores').find('.store').sort(function (a, b) {
                                return $(a).attr('sorting') - $(b).attr('sorting');
                            }).appendTo('body .stores');

                            $('body .storeMap').each(function (e) {
                                var storeID = $(this).attr("storeID");
                                var storeMap;

                                $.each(maps, function (i, record) {
                                    if (record.storeID == storeID) {
                                        storeMap = record.storeMap;
                                    }
                                });
                                $(this).html(storeMap);
                            });


                                
  

                        }
                        else {
                            $('body .stores').remove();
                        }


                    }, doneTypingInterval);



                }
                else {
                    $('body .stores').remove();
                }


            });


        }

        function setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }

        function getCookie(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }

        function myDate() {
            var a = new Date();
            var days = new Array(7);
            days[0] = "Sunday";
            days[1] = "Monday";
            days[2] = "Tuesday";
            days[3] = "Wednesday";
            days[4] = "Thursday";
            days[5] = "Friday";
            days[6] = "Saturday";
            var dayName = days[a.getDay()];
            return dayName;
        }

        function checkAndSetStore() {
            var storeID = getCookie('storeSelectedID');
            var myStore;
            var storeName;
            var storeAddress;
            var dayName = myDate();
            var openUntil;
            if (storeID.length > 0) {
                myStore = Stores.filter(function (store) {
                    return store.StoreId == storeID;
                });
                if (!myStore || myStore.length == 0) {
                    return;
                }
                storeName = myStore[0].StoreName;
                storeAddress = myStore[0].StateAddress + ' ' + myStore[0].City + ' ' + myStore[0].State + ' ' + myStore[0].ZipCode;
                Object.keys(myStore[0]).forEach(function eachKey(key) {
                    if (key == "CloseTime" + dayName)
                        openUntil = myStore[0][key];
                });
                // $('body .setStoreWrapper .text').hide();
                $('body .myStore .storeName').html(storeName);
                $('body .myStore .storeAddress').html(storeAddress);
                $('body .chooseStore .title').text('Change Store');
                $('body .myStore .distance').attr('storelat', myStore[0].Latitude);
                $('body .myStore .distance').attr('storelon', myStore[0].Longitude);
                $('body .setStoreWrapper .setStore .title').html(storeName);

                $('body .setStoreWrapper .text.time').attr('dayName', dayName).addClass('openUntil').removeClass('closed');
                if (openUntil != 'Closed') {
                    $('body .setStoreWrapper .text.time').html("Open Until " + openUntil);
                    // $('body .setStoreWrapper .text').html();
                }
                else if (openUntil == 'Closed') {
                    $('body .setStoreWrapper .text.time').addClass('closed').removeClass('openUntil').html(openUntil);
                }
                var OpenTimeMonday = (myStore[0].OpenTimeMonday != '' && myStore[0].CloseTimeMonday != '' ? myStore[0].OpenTimeMonday + ` - ` + myStore[0].CloseTimeMonday : 'Closed');
                var OpenTimeTuesday = (myStore[0].OpenTimeTuesday != '' && myStore[0].CloseTimeTuesday != '' ? myStore[0].OpenTimeTuesday + ` - ` + myStore[0].CloseTimeTuesday : 'Closed');
                var OpenTimeWednesday = (myStore[0].OpenTimeWednesday != '' && myStore[0].CloseTimeWednesday != '' ? myStore[0].OpenTimeWednesday + ` - ` + myStore[0].CloseTimeWednesday : 'Closed');
                var OpenTimeThursday = (myStore[0].OpenTimeThursday != '' && myStore[0].CloseTimeThursday != '' ? myStore[0].OpenTimeThursday + ` - ` + myStore[0].CloseTimeThursday : 'Closed');
                var OpenTimeFriday = (myStore[0].OpenTimeFriday != '' && myStore[0].CloseTimeFriday != '' ? myStore[0].OpenTimeFriday + ` - ` + myStore[0].CloseTimeFriday : 'Closed');
                var OpenTimeSaturday = (myStore[0].OpenTimeSaturday != '' && myStore[0].CloseTimeSaturday != '' ? myStore[0].OpenTimeSaturday + ` - ` + myStore[0].CloseTimeSaturday : 'Closed');
                var OpenTimeSunday = (myStore[0].OpenTimeSunday != '' && myStore[0].CloseTimeSunday != '' ? myStore[0].OpenTimeSunday + ` - ` + myStore[0].CloseTimeSunday : 'Closed');

                var store_hours_info = `<span class="info">
                    <p>Mon: `+ OpenTimeMonday + `</p>
                    <p>Tue: `+ OpenTimeTuesday + `</p>
                    <p>Wed: `+ OpenTimeWednesday + `</p>
                    <p>Thu: `+ OpenTimeThursday + `</p>
                    <p>Fri: `+ OpenTimeFriday + `</p>
                    <p>Sat: `+ OpenTimeSaturday + `</p>
                    <p>Sun: `+ OpenTimeSunday + `</p>
                </span>`;
                var googleMap = '';
                if (myStore[0].StoreMap != '' && myStore[0].StoreMap.includes('<iframe')) {
                    googleMap = $(myStore[0].StoreMap);
                    $(googleMap).attr('width', '100%');
                    $(googleMap).attr('height', '200px');
                    googleMap = googleMap[0].outerHTML;
                    console.log(googleMap);
                }
                var myStoreDetails = `
                    <div class="details">
                        <div class="address">
                        <label>Store Hours</label>
                        `+ store_hours_info + `
                        </div>
                        <div class="phone">
                            <span class="info">
                                <a href="tel:`+ myStore[0].StorePhone + `">` + myStore[0].StorePhone + `</a>
                                <a href="mailto:`+ myStore[0].StoreEmail + `">` + myStore[0].StoreEmail + `</a>
                            </span>
                        </div>
                    </div>
                    
                    <div class="storeMap" storeID="`+ myStore[0].StoreId + `" style="width: 100%" data-storeMap='` + googleMap + `'>
                    `+ googleMap + `
                    </div>`;

                $('.storesDropdown .myStore .storeDetails').html(myStoreDetails);
                $('body .noStoreSelectedMessage').hide();
                $('body .myStore').fadeIn();
                setDistance();
                setProductAvailability();

                //checkout
                $('body #pickUpSection .address .info .day.monday .open').html(myStore[0].OpenTimeMonday);
                $('body #pickUpSection .address .info .day.monday .close').html(myStore[0].CloseTimeMonday);
                $('body #pickUpSection .address .info .day.tuesday .open').html(myStore[0].OpenTimeTuesday);
                $('body #pickUpSection .address .info .day.tuesday .close').html(myStore[0].CloseTimeTuesday);
                $('body #pickUpSection .address .info .day.wednesday .open').html(myStore[0].OpenTimeWednesday);
                $('body #pickUpSection .address .info .day.wednesday .close').html(myStore[0].CloseTimeWednesday);
                $('body #pickUpSection .address .info .day.thursday .open').html(myStore[0].OpenTimeThursday);
                $('body #pickUpSection .address .info .day.thursday .close').html(myStore[0].CloseTimeThursday);
                $('body #pickUpSection .address .info .day.friday .open').html(myStore[0].OpenTimeFriday);
                $('body #pickUpSection .address .info .day.friday .close').html(myStore[0].CloseTimeFriday);
                $('body #pickUpSection .address .info .day.saturday .open').html(myStore[0].OpenTimeSaturday);
                $('body #pickUpSection .address .info .day.saturday .close').html(myStore[0].CloseTimeSaturday);
                $('body #pickUpSection .address .info .day.sunday .open').html(myStore[0].OpenTimeSunday);
                $('body #pickUpSection .address .info .day.sunday .close').html(myStore[0].CloseTimeSunday);
                $('body #pickUpSection .address .info .day .open').each(function () {
                    if ($(this).html() == '') {
                        $(this).html('Closed').next('.close').html('');
                        $(this).parent('.day').html($(this).parent('.day').html().split('-').join(''));
                    }
                });
                $('body #pickUpSection .phone .info a').html(myStore[0].StorePhone).attr('href', 'tel:' + myStore[0].StorePhone);
                $('body #pickUpSection .myStore').attr('storeID', myStore[0].StoreId);
                $('body #pickUpSection .myStore .storeAddress').attr('address1', myStore[0].StateAddress);
                $('body #pickUpSection .myStore .storeAddress').attr('address2', myStore[0].StateAddress);
                $('body #pickUpSection .myStore .storeAddress').attr('city', myStore[0].City);
                $('body #pickUpSection .myStore .storeAddress').attr('stateOrProvince', myStore[0].State);
                $('body #pickUpSection .myStore .storeAddress').attr('stateOrProvinceCode', '');
                $('body #pickUpSection .myStore .storeAddress').attr('country', myStore[0].Country);
                $('body #pickUpSection .myStore .storeAddress').attr('countryCode', '');
                $('body #pickUpSection .myStore .storeAddress').attr('postalCode', myStore[0].ZipCode);
                $('body #pickUpSection .storeMap').attr('storeID', myStore[0].StoreId).html(googleMap);

                $('body #pickUpSection .setStoreWrapper').fadeIn();
                $('body #pickUpSection .storeMap').fadeIn();
                $('body #pickUpSection .confirmPickup').fadeIn();
                $('body #pickUpSection .chooseStore.noStoreSelected').fadeOut();
                $('body #pickUpSection .columns .chooseStore').fadeIn();
                //$('body .pickupButtonWrapper').fadeIn();
                $('body #pickUpSection .form-field.form-field--input.form-field--inputText').fadeIn();

                // $('body .storeMap').each(function (e) {
                //     var storeID = $(this).attr("storeID");
                //     var storeMap;
                //     $.each(maps, function (i, record) {
                //         if (record.storeID == storeID) {
                //             storeMap = record.storeMap;
                //         }
                //     });
                //     $(this).html(storeMap);
                // });
                $('body #pickUpSection .storeSection').show();
            }
            else {
                $('body .chooseStore .title').html('Select Store');
                $('body .myStore').fadeOut();
                $('body #pickUpSection .chooseStore.noStoreSelected').fadeIn();
                setProductAvailability();
                setOnlineAvailability();
                $('body #pickUpSection .storeSection').hide();
                $('body .pickupButtonWrapper').hide();
                $('body #pickUpSection .form-field.form-field--input.form-field--inputText').hide();
            }
        }

        function quickViewPopup() {
            var quickViewOpen = 0;
            $('body').on('click', '.quickview', function () {
                quickViewOpen = 0;
            })
            $('body').on('DOMNodeInserted', '.modal-body.quickView', function (event) {
                var dataRequest = {};
                if ($('.productView--quickView [data-product-sku]').length && quickViewOpen == 0) {
                    var dataRequest = {};
                    dataRequest['SKU'] = $('.productView--quickView [data-product-sku]').html();
                    var checkStoresQTY = ClickAndCollect.getAllStoresWithQuantity(dataRequest);
                    var haveStockinStore;
                    haveStockinStore = checkStoresQTY.filter(function (store) {
                        return store.Quantity >= 1;
                    });
                    if (haveStockinStore.length == 0) {
                        $('.productView--quickView [data-product-sku]').parents('.productView-details').find('#form-action-addToCart').remove();
                    }
                    quickViewOpen = 1;
                }
                if (!$('.modal-body.quickView .storeSection').length > 0) {
                    var sku = $('body [data-product-sku]').html();
                    dataRequest['SKU'] = sku;
                    Stores = ClickAndCollect.getAllStoresWithQuantity(dataRequest);
                    $(".form-field.form-field--increments").append(clickAndCollectProductHTML);
                    checkAndSetStore();
                }
            });
        }

        function checkCombinationAvailability() {
            $('body').on('click', '.form-option', function () {
                var checkingCombination = setInterval(() => {
                    if ($('.alertBox.productAttributes-message').is(":visible")) {
                        clearInterval(checkingCombination);
                        $('.onlineAvailability').html("Unavailable").addClass('notAvailable').removeClass('available').show();
                        $('.availability').hide();
                        $('.productView-options .setStoreWrapper').hide();
                    }
                    else {
                        $('.productView-options .setStoreWrapper').show();
                    }
                }, 3000);
            });
        }

        function setAsStore() {
            $('body').on('click', '.setAsStore', function () {
                var storeID = $(this).attr('id');
                setCookie('storeSelectedID', storeID, 365);

                checkAndSetStore();
                // swal.close();
                $('.storesDropdown').removeClass('isOpen');
                setProductAvailability();
                $('body').removeAttr('style');
                $('#modal').removeClass('noZindex');
                $('.modal-background').removeClass('noZindex');
            });
        }

        function getCurrentLocation() {
            navigator.geolocation.getCurrentPosition(function (position) {
                $('body').attr('mylat', position.coords.latitude);
                $('body').attr('mylon', position.coords.longitude);
                setDistance();
            },
                function (error) {
                });
        }

        function distance(lat1, lon1, lat2, lon2) {
            var R = 6371; // km (convert this constant to get miles)
            var dLat = (lat2 - lat1) * Math.PI / 180;
            var dLon = (lon2 - lon1) * Math.PI / 180;
            var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var d = R * c;
            return Math.round(d) + " km";
        }

        function useCurrentLocation() {
            $('body').on('click', '.useCurrentLocation', function () {
                getCurrentLocation();
                setCookie('storeSelectedID', getNearestStoreID(), 365);
                checkAndSetStore();
                // swal.close();
                $('.storesDropdown').removeClass('isOpen');
                $('body').removeAttr('style');
            });
        }

        function getNearestStoreID() {
            var allDistances = [];
            var allIDs = [];
            var nearestDistance;
            var nearestStoreID;
            if ($('body[mylat][mylon]').length > 0) {
                var myLat = $('body').attr('mylat');
                var myLon = $('body').attr('mylon');
                $.each(Stores, function (i, v) {
                    var d = distance(myLat, myLon, v.Latitude, v.Longitude).replace("km", "");
                    var D = parseInt(d);
                    allDistances.push(D);
                    allIDs.push(v.StoreId);
                });

                nearestDistance = Math.min(...allDistances);
                for (var i = 0; i < allDistances.length; i++) {
                    if (allDistances[i] == nearestDistance) {
                        nearestStoreID = allIDs[i];
                    }
                }
                return nearestStoreID;
            }
        }

        function setDistance() {
            var myLat = getCookie('myLat');
            var myLon = getCookie('myLon');
            var storeLat = $('body .myStore .distance').attr('storelat');
            var storeLon = $('body .myStore .distance').attr('storelon');
            var d = distance(myLat, myLon, storeLat, storeLon);
            if (myLat.length > 0 && myLon.length > 0) {
                $('body .myStore .distance').html(d);
            }
        }
        /////////cick and collect ui/////////

        if (window.location.pathname == '/checkout') {
            var myStore;
            var cartItems = getCartItems();

            //checkout functions//
            

            observeCheckoutApp();
            selectPrefferedCheckout();
            pickDate();
            pickTime();
            confirmPickup();
            confirmSameDayDelivery();
            sameAsShipping();
            methodSelection();
            //checkout functions//

            function getCurrentStore(storeId) {
                var currentStore = Stores.filter(function (store) {
                    return store.StoreId == storeId;
                });

                currentStore = currentStore[0];
                return currentStore;
            }

            function getCartItems() {
                var settings = {
                    "async": false,
                    "crossDomain": true,
                    "url": "/api/storefront/carts",
                    "method": "GET",
                    "headers": {}
                }

                $.ajax(settings).done(function (response) {
                    cartItems = response[0].lineItems.physicalItems;
                });
                return cartItems;
            }

            function checkAvailabilityInAllStores() {
                var isAvailable = true;
                cartItems.forEach(function (item) {
                    var request = {};
                    request["SKU"] = item.sku;

                    var checkStoresQTY = ClickAndCollect.getAllStoresWithQuantity(request);
                    var haveStockinStore;

                    // haveStockinStore = checkStoresQTY.filter(function (store) {
                    //     return store.Quantity >= item.quantity;
                    // });

                    haveStockinStore = checkStoresQTY.filter(function (store) {

                        var totalQuantityofStores = checkStoresQTY.reduce(function(sum, current){
                            return sum + current.Quantity;
                        }, 0);

                        console.log(totalQuantityofStores);

                        if(store.Quantity >= item.quantity) {
                            return store.Quantity >= item.quantity;
                        } else if(store.Quantity < item.quantity){
                            if(totalQuantityofStores >= item.quantity) {
                                return store.Quantity;
                            } else {
                                return "";
                            }

                        }

                     
                    });

                    if (haveStockinStore.length == 0) {
                        swal.fire({
                            html: `<p>One or more items are not available in any store</p>`
                        });
                        isAvailable = false;
                        return;
                    }
                });

                return isAvailable;
            }

            function checkAvailability(storeID) {
                var isAvailable = true;
                var availability;
                cartItems.forEach(function (item) {
                    var request = {};
                    request["SKU"] = item.sku;
                    request["storeid"] = storeID;
                    availability = ClickAndCollect.getstoreproductavailability(request);
                    if (availability == "Product not found") {
                        var html = `<p>One or more items are not available in the store selected</p>`
                        swal.fire({
                            html: customization.UnavailableMessage
                        });
                        isAvailable = false;
                        return;
                    }
                    else if (availability.Quantity <= 0) {
                        var html = `<p>One or more items are not available in the store selected</p>`
                        swal.fire({
                            text: customization.UnavailableMessage
                        });
                        isAvailable = false;
                        return;
                    }
                    else if (availability.Quantity < item.quantity) {
                        var html = `
                        <p>Not enough quantity of <strong>`+ availability.ProductName + `</strong> in the store selected</p>
                        `
                        swal.fire({
                            html: html
                        });
                        isAvailable = false;
                        return;
                    }
                });

                return isAvailable;
            }

            function checkAllItemsIfAvailableShipping() {
                $('.cs-address-loader-hldr').show();
                getCartItemsAsync().then((res) => {
                    let pickUpOnly = [];
                    let productId = [];
                    let deleteItems = [];
                    let resCartItems = res[0].lineItems.physicalItems;
                    let itemIDWithproductId = [];
                    resCartItems.forEach(function (item) {
                        productId.push(item.productId);
                        itemIDWithproductId.push(
                            {
                                "itemId": item.id,
                                "prodId": item.productId
                            }
                        )
                    });

                    getProductsByProductIds(productId).then(resProdcuts => {
                        let data = graphQLToJavascript(resProdcuts);
                        var customFields;

                        data.forEach(function (dataElements) {
                            if (dataElements.customFields) {
                                customFields = dataElements.customFields;
                                customFields.forEach(function (customFieldsElements) {
                                    if (customFieldsElements.name == 'in_store_pickup_only_eagle' && customFieldsElements.value == 'true') {
                                        pickUpOnly.push(dataElements.entityId);
                                    }
                                });
                                deleteItems = itemIDWithproductId.map(function (item) {
                                    if (pickUpOnly.includes(item.prodId)) {
                                        return {
                                            "id": item.itemId,
                                            "quantity": 0
                                        };
                                    }
                                });
                            }
                        });
                        if (pickUpOnly.length > 0) {
                            $('.cs-address-loader-hldr').hide();
                            swal.fire({
                                text: "One or more items are not available for shipping, would you like to remove them?",
                                icon: 'warning',
                                showCancelButton: true,
                                cancelButtonText: 'PICKUP IN STORE INSTEAD',
                                confirmButtonText: 'REMOVE ITEMS & CONTINUE WITH SHIPPING',
                                allowEscapeKey: false,
                                allowOutsideClick: false,
                                customClass: {
                                    confirmButton: 'remove-pickup-items'
                                }
                            }).then(result => {
                                if (result.value && result.value === true) {
                                    deleteItems = deleteItems.filter(e => e);
                                    removePickupItemsInCart(deleteItems);
                                }else{
                                    $('.pickup').trigger('click');
                                }
                            });
                        }else{
                            $('.cs-address-loader-hldr').hide();
                            $('body #pickUpSection').hide();
                            $('.buttonsWrapper .delivery').attr('disabled', true);
                            clearShippingFields();
                            $('body .checkout-view-content').find('.checkout-form').slideDown();
                            setCookie('pickUp', 'false', '365');
                            setCookie('sameDay', 'false', '365');
                        }
                    });
                });
            }

            function observeCheckoutApp() {
                if ($(checkoutHeaderCompenent).length > 0) {

                      // Checkout Issue fix 1-21-22
                      var failCheckout = false;

                    function applyCheckoutOptions() {

                         // Checks if the Checkout Fails
                         failCheckout = true;

                        $('.checkout-step--shipping .optimizedCheckout-headingPrimary').text(customization.ShippingStepHeaderText).css('flex', '12');
                        $('body .checkout-step--shipping .checkout-view-content').prepend(prefferedCheckoutButtons);
                        $('body .checkout-step--shipping .checkout-view-content').append(clickAndCollectComponent);
                        if( sddEnabled == 'true' ){
                            $('body .checkout-step--shipping .checkout-view-content').append(sameDayDeliveryComponent);
                            initAddress('addressLine1InputSDD');
                        }
                        $('body .checkout-step--shipping .checkout-view-content .checkout-form').append('<a href="#" class="confirmShipping button button--primary optimizedCheckout-buttonPrimary">Continue</a>');
                        $('body .checkout-step--shipping .checkout-view-content .checkout-form #checkout-shipping-continue').hide();

                        $('#CommentPickup').val(getCookie("CommentPickup"));
                        if (getCookie("PickupType")) {
                            $('#PickupType').val(getCookie("PickupType"));
                        }

                        checkAndSetStore();
                        hideSDDShippingMethod();
                        if (datePickerEnabled == "True") {

                            var $datePicker = $('body .datePicker');
                            $datePicker.datepicker({
                                format: 'yyyy-mm-dd',
                                autoHide: true,
                                startDate: new Date()
                            });

                            if (datePicked.length > 0 && timePicked.length > 0 && currentStoreSelected == getCookie("storeSelectedID")) {
                                $datePicker.datepicker('setDate', datePicked);
                                $('#allTimes').val(timePicked);
                                $('body .pickupButtonWrapper').fadeIn();
                            }

                        }
                        else {
                            $('#datePickerSectionWrapper').hide();
                            // $('body .pickupButtonWrapper').fadeIn();
                        }
                        if (getCookie('pickUp') == 'true') {
                            $('body .checkout-step--shipping .checkout-form').hide();
                            $(' body #pickUpSection').show();
                            $('.buttonsWrapper .pickup').attr('disabled', true);
                        }
                        
                        else if (getCookie('pickUp') == "null" || getCookie('pickUp') == "") {
                            $('body .checkout-step--shipping .checkout-form').hide();
                            $('body #pickUpSection').hide();
                        }
                        else if (getCookie('pickUp') == 'false' && getCookie('sameDay') == 'false') {
                            $('body .checkout-step--shipping .checkout-form').hide();
                            $('body #pickUpSection').hide();
                            $('.buttonsWrapper .delivery').attr('disabled', true);
                            checkAllItemsIfAvailableShipping();
                            // $('body .checkout-step--shipping .checkout-form').show();
                            // clearShippingFields();
                        }else if(getCookie('pickUp') == 'false' && getCookie('sameDay') == 'true'){
                            $('body .checkout-step--shipping .checkout-form').hide();
                            $('body #pickUpSection').hide();
                            $('.buttonsWrapper .sameday').attr('disabled', true);
                            checkAllItemsIfAvailableSDD();
                        }
                        continueWithShipping();
                        $('#checkoutShippingAddress .dynamic-form-field label').each(function () {
                            var labelName = $(this).text();
                            if (labelName.indexOf('DatePickUp') >= 0) {
                                $(this).parent().hide();
                            }
                        });

                        $('[name="orderComment"]').attr('id', 'orderComment');

                        // Check for address fields on delivery tab

                        let checkAddressFields = setInterval(() => {
                                               
                            if ($('#checkoutShippingAddress .dynamic-form-field.dynamic-form-field--firstName').length > 0) {
                                clearInterval(checkAddressFields);
                                
                                $('#checkoutShippingAddress .dynamic-form-field label').each(function () {
                                    var labelName = $(this).text();
                                    if (labelName.indexOf('DatePickUp') >= 0 || labelName.indexOf('Ship from store') >= 0 || labelName.indexOf("If not home") >= 0) {
                                        $(this).parent().hide();
                                        if(getCookie('sameDay') == "false"){
                                            if (labelName.includes("Ship from store")) {
                                                let sfsElement = $(this).next("input").get(0);
                                                changeValue(sfsElement, "");
                                            }
                                            if (labelName.includes("If not home")) {
                                                let ifNotHomeElement = $(this).next("select").get(0);
                                                changeSelectValue(ifNotHomeElement, "");
                                            }
                                        }
                                    }
                                });

                                
                                if(google_address) {
                                    $('#sameDayDelivery #addressLine1InputSDD').val(google_address.street_number +' '+google_address.street_address);
                                    $('#sameDayDelivery #cityInputSDD').val(google_address.city);
                                    $('#sameDayDelivery #countryCodeInputSDD').val(google_address.country);
                                    $('#sameDayDelivery #provinceCodeInputSDD').val(google_address.state);
                                    $('#sameDayDelivery #postCodeInputSDD').val(google_address.postalCode);
                                }
                            }
                        },500);


                        
                        let checkAddressFieldsOption = setInterval(() => {
                           
                            if ($('#checkoutShippingAddress .dynamic-form-field.dynamic-form-field--firstName').length > 0) {
                                
                                $('#checkoutShippingAddress .dynamic-form-field label').each(function () {
                                    var labelName = $(this).text();
                                    if (labelName.indexOf('DatePickUp') >= 0 || labelName.indexOf('Ship from store') >= 0 || labelName.indexOf("If not home") >= 0) {
                                        $(this).parent().hide();
                                    }
                                });
                            }
                        },500);
                        

                        if($('body #click-and-collect-checkout-delivery-button').attr('disabled') == 'disabled') {
                            setCookie('sameDay', 'false', 365);
                        }

                    }

                    // The node to be monitored
                    var target = $('#checkout-app')[0];
                    // Create an observer instance
                    var observer = new MutationObserver(function (mutations) {
                        mutations.forEach(function (mutation) {
                            var newNodes = mutation.addedNodes; // DOM NodeList
                            if (newNodes !== null) { // If there are new nodes added
                                var $nodes = $(newNodes); // jQuery set
                                $nodes.each(function () {
                                    var $node = $(this);
                                    // console.log($node);
                                    if ($($node).hasClass('checkout-step--shipping')) {
                                        // do something
                                        // alert('shipping section added');
                                        $(this).find('.optimizedCheckout-headingPrimary').text(customization.ShippingStepHeaderText).css('flex', '12');
                                    }
                                    console.log($($node[0]));
                                    console.log($($node[0]).attr('class'));
                                    if ($($node[0]).attr('class') == 'checkout-step optimizedCheckout-checkoutStep checkout-step--shipping') {
                                        // if($(this).text().includes('Pickup In Store')) {
                                        // alert('pick up in store saved step detected');
                                        $('.checkout-step.optimizedCheckout-checkoutStep.checkout-step--shipping .button.button--tertiary.button--tiny.optimizedCheckout-buttonSecondary').trigger('click');
                                        $('.checkout-step.optimizedCheckout-checkoutStep.checkout-step--customer [data-test="step-edit-button"]').hide();
                                        $('.checkout-step.optimizedCheckout-checkoutStep.checkout-step--billing [data-test="step-edit-button"]').hide();

                                        $('.checkout-step.optimizedCheckout-checkoutStep.checkout-step--customer .stepHeader,.checkout-step.optimizedCheckout-checkoutStep.checkout-step--customer .checkout-view-header').css('pointer-events', 'none');
                                        $('.checkout-step.optimizedCheckout-checkoutStep.checkout-step--billing .stepHeader').css('pointer-events', 'none');
                                        // }
                                    }
                                    if ($($node[0]).prev() != null) {
                                        if ($($node[0]).prev().text() == 'Shipping Address') {


                                            applyCheckoutOptions();
                                            if(getCookie('sameDay') == "false"){
                                                $("#checkoutShippingAddress .checkout-address label").each(function () {
                                                    if ($(this).text().includes("Ship from store")) {
                                                        sfsElement = $(this).next("input").get(0);
                                                        changeValue(sfsElement, "");
                                                    }
                                                    if ($(this).text().includes("If not home")) {
                                                        ifNotHomeElement = $(this).next("select").get(0);
                                                        changeSelectValue(ifNotHomeElement, "");
                                                    }
                                                });
                                            }

                                        }


                                        if ($($node[0]).prev().text() == 'Billing Address') {
                                            $('body').on('click', '#addressToggle', function(){
                                                let checkBillingAddressFields_onClick = setInterval(() => {
                                                    // console.log("checkBillingAddressFields_onClick1")
                                                    if($('#checkoutBillingAddress .dynamic-form-field label').length > 0){
                                                        clearInterval(checkBillingAddressFields_onClick);
                                                        $('#checkoutBillingAddress .dynamic-form-field label').each(function () {
                                                            var labelName = $(this).text();
                                                            if (labelName.indexOf('DatePickUp') >= 0 || labelName.indexOf('Ship from store') >= 0 || labelName.indexOf('If not home') >= 0) {
                                                                $(this).parent().hide();
                                                                
                                                                
                                                                if(getCookie('sameDay') == "false"){
                                                                    if (labelName.includes("Ship from store")) {
                                                                        let sfsElement = $(this).next("input").get(0);
                                                                        changeValue(sfsElement, "");
                                                                    }
                                                                    if (labelName.includes("If not home")) {
                                                                        let ifNotHomeElement = $(this).next("select").get(0);
                                                                        changeSelectValue(ifNotHomeElement, "");
                                                                    }
                                                                }
                                                            }
                                                        });
                                                    }
                                                },500);
                                            });
                                            let checkBillingAddressFields = setInterval(() => {
                                                // console.log("checkBillingAddressFields2")
                                                if($('#checkoutBillingAddress .dynamic-form-field label').length > 0){
                                                    clearInterval(checkBillingAddressFields);
                                                    $('#checkoutBillingAddress .dynamic-form-field label').each(function () {
                                                        var labelName = $(this).text();
                                                        if (labelName.indexOf('DatePickUp') >= 0 || labelName.indexOf('Ship from store') >= 0 || labelName.indexOf('If not home') >= 0) {
                                                            $(this).parent().hide();
                                                            
        
                                                            if(getCookie('sameDay') == "false"){
                                                                if (labelName.includes("Ship from store")) {
                                                                    let sfsElement = $(this).next("input").get(0);
                                                                    changeValue(sfsElement, "");
                                                                }
                                                                if (labelName.includes("If not home")) {
                                                                    let ifNotHomeElement = $(this).next("select").get(0);
                                                                    changeSelectValue(ifNotHomeElement, "");
                                                                }
                                                            }
                                                        }
                                                    });
                                                }
                                            },500);
                                        }
                                    }
                                    if ($($node[0]).hasClass('shippingOptions-container form-fieldset') ||
                                        $($node[0]).hasClass('form-checklist-item optimizedCheckout-form-checklist-item') ||
                                        $($node[0]).hasClass('loadingOverlay optimizedCheckout-overlay') ||
                                        $($node[0]).hasClass('buttonsWrapper')) {
                                        // alert('shipping methods inserted');
                                        $('.shippingOption-desc').each(function () {
                                            var shippingMethod = $(this).html();
                                            // alert(shippingMethod);
                                            $(this).parents('.form-label.optimizedCheckout-form-label').attr('name', shippingMethod);
                                            $('[name*="Pickup"]').hide();
                                            $('[name*="Same Day Delivery"]').hide();
                                            if ($('.buttonsWrapper button[disabled]').html() == 'Pickup in Store') {
                                                $('#checkout-shipping-continue').removeAttr('disabled');
                                                setTimeout(() => {
                                                    // $('[name*="Pickup"]').trigger('click');
                                                });
                                            }
                                            else if($('.buttonsWrapper button[disabled]').html() == 'Same Day Delivery'){
                                                $('#checkout-shipping-continue').removeAttr('disabled');
                                                setTimeout(() => {
                                                    // $('[name*="Same Day Delivery"]').trigger('click');
                                                });
                                            }
                                            else {
                                                if($('.shippingOptions-container ul li label:not([name*="Pickup"],[name*="Same Day Delivery"]):first').length>0) {
                                                  let preventShippingButton = ($('[name*="Pickup"]').prev('input').prop('checked') || $('[name*="Same Day Delivery"]').prev('input').prop('checked')) && (getCookie('pickUp') == 'false' && getCookie('sameDay') == 'false')
                                                  if(preventShippingButton) {
                                                    $('.checkout-step.optimizedCheckout-checkoutStep.checkout-step--billing [data-test="step-edit-button"]').hide();
                                                    $('.checkout-step.optimizedCheckout-checkoutStep.checkout-step--billing .stepHeader').css('pointer-events','none');
                                                    $('.checkout-step.optimizedCheckout-checkoutStep.checkout-step--customer [data-test="step-edit-button"]').hide();
                                                    $('.checkout-step.optimizedCheckout-checkoutStep.checkout-step--customer .stepHeader').css('pointer-events','none');
                                                  }
                                                }
                                            }
                                        });
                                    }
                                    if (getCookie('pickUp') == 'true') {

                                    } else {
                                        var checkingContinueButtonifDisabled = setInterval(() => {
                                            if ($('.shippingOptions-container ul li label:not([name*="Pickup"]):first').length == 0) {
                                                // console.log('no other shipping methods')
                                                if(getCookie('sameDay') == 'false'){
                                                    if (!$("#checkout-shipping-continue").attr('disabled')) {
                                                        console.log('checkingContinueButtonifDisabled')
                                                        $('#checkout-shipping-continue').attr('disabled', true);
                                                        clearInterval(checkingContinueButtonifDisabled);
                                                    }
                                                }
                                            }
                                        }, 200);
                                    }
                                });
                            }
                        });
                        // observer.disconnect();
                    });

                    setTimeout(function() {

                        console.log(failCheckout, "if true then the functions runs normally");

                    }, 2000)


                    $(window).on('load', () => {
                        setTimeout(function() {

                            if(failCheckout == false) {
                                applyCheckoutOptions();
                            }
    
                        }, 3000);
                    });


                    // Configuration of the observer:
                    var config = {
                        attributes: false,
                        childList: true,
                        subtree: true,
                        characterData: false
                    };

                    // Pass in the target node, as well as the observer options
                    observer.observe(target, config);

                    // Later, you can stop observing
                    // observer.disconnect();
                }

            }


            function selectPrefferedCheckout() {
                $('body').on('click', '.delivery', function () {
                    $('.delivery').closest('.buttonsWrapper').find('.pickup').removeAttr('disabled');
                    $('.delivery').closest('.buttonsWrapper').find('.sameday').removeAttr('disabled');
                    $('.delivery').attr('disabled', true);
                    $('body #pickUpSection').slideUp();
                    $('body #sameDayDelivery').slideUp();
                    checkAllItemsIfAvailableShipping();
                    // $('body .checkout-view-content').find('.checkout-form').slideDown();
                    // setCookie('pickUp', 'false', '365');
                });
                $('body').on('click', '.pickup', function () {
                    $(this).closest('.buttonsWrapper').find('.delivery').removeAttr('disabled');
                    $(this).closest('.buttonsWrapper').find('.sameday').removeAttr('disabled');
                    $(this).attr('disabled', true);
                    $('body .checkout-view-content').find('.checkout-form').slideUp();
                    $('body #sameDayDelivery').slideUp();
                    $('body #pickUpSection').slideDown();
                    setCookie('pickUp', 'true', '365');
                    setCookie('sameDay', 'false', '365');
                });
                $('body').on('click', '.sameday', function () {
                    $(this).parent('.buttonsWrapper').find('.pickup').removeAttr('disabled');
                    $(this).parent('.buttonsWrapper').find('.delivery').removeAttr('disabled');
                    $(this).attr('disabled', true);
                    $('body .checkout-view-content').find('.checkout-form').slideUp();
                    $('body #pickUpSection').slideUp();
                    checkAllItemsIfAvailableSDD();
                });
            }

            function changeValue(element, value) {
                try {
                    var nativeInputValueSetter = Object.getOwnPropertyDescriptor(
                        window.HTMLInputElement.prototype,
                        "value"
                    ).set;
                    nativeInputValueSetter.call(element, value);

                    var inputEvent = new Event("input", { bubbles: true });
                    element.dispatchEvent(inputEvent);
                } catch (e) {
                    console.log(e);
                }
            }

            function changeSelectValue(element, selectedValue) {
                try {
                    element.value = selectedValue;
                    var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype, "value").set;
                    nativeInputValueSetter.call(element, selectedValue);
                    var ev2 = new Event('change', { bubbles: true });
                    element.dispatchEvent(ev2);
                } catch (e) {
                    console.log(e);
                }
            }

            function removePickupItemsInCart(itemsToBeDeleted) {

                console.log(itemsToBeDeleted, "processed")

                var settings = {
                    "crossDomain": true,
                    "url": `/remote/v1/cart/update`,
                    "method": "POST",
                    "processData": true,
                    "data": {
                        "items": itemsToBeDeleted
                    }
                }

                $.ajax(settings).done(function (response) {
                    location.reload();
                });
            }


            function confirmPickup() {
                $('body').on('keyup', '#CommentPickup', function () {
                    setCookie('CommentPickup', $(this).val(), 365);
                });
                $('body').on('change', '#PickupType', function () {
                    setCookie('PickupType', $(this).val(), 365);
                });
                $('body').on('click', '.confirmShipping', function (e) {
                    e.preventDefault();
                    var pickUpOnly = [];
                    $("#checkoutShippingAddress .checkout-address label").each(function () {
                        if ($(this).text().includes("Ship from store")) {
                            sfsElement = $(this).next("input").get(0);
                            changeValue(sfsElement, "");
                        }
                        if ($(this).text().includes("If not home")) {
                            ifNotHomeElement = $(this).next("select").get(0);
                            changeSelectValue(ifNotHomeElement, "");
                        }
                    });
                    getCartItemsAsync().then((res) => {
                        let productId = [];
                        let deleteItems = [];
                        let resCartItems = res[0].lineItems.physicalItems;
                        let itemIDWithproductId = [];
                        resCartItems.forEach(function (item) {
                            productId.push(item.productId);
                            itemIDWithproductId.push(
                                {
                                    "itemId": item.id,
                                    "prodId": item.productId
                                }
                            )
                        });

                        getProductsByProductIds(productId).then(resProdcuts => {
                            let data = graphQLToJavascript(resProdcuts);
                            var customFields;

                            data.forEach(function (dataElements) {
                                if (dataElements.customFields) {
                                    customFields = dataElements.customFields;
                                    customFields.forEach(function (customFieldsElements) {
                                        if (customFieldsElements.name == 'in_store_pickup_only_eagle' && customFieldsElements.value == 'true') {
                                            pickUpOnly.push(dataElements.entityId);
                                        }
                                    });
                                    deleteItems = itemIDWithproductId.map(function (item) {
                                        if (pickUpOnly.includes(item.prodId)) {
                                            return {
                                                "id": item.itemId,
                                                "quantity": 0
                                            };
                                        }
                                    });
                                }
                            });
                            if (pickUpOnly.length > 0) {
                                swal.fire({
                                    text: "One or more items are not available for shipping, would you like to remove them?",
                                    icon: 'warning',
                                    showCancelButton: true,
                                    customClass: {
                                        confirmButton: 'remove-pickup-items'
                                    }
                                }).then(result => {
                                    if (result.value && result.value === true) {
                                        deleteItems = deleteItems.filter(e => e);
                                        removePickupItemsInCart(deleteItems);
                                    }
                                });
                            } else {
                                var allItemsAvailable = checkAvailabilityInAllStores();
                                console.log(allItemsAvailable, "allItemsAvailable")
                                if ($('.shippingOptions-container ul li label:not([name*="Pickup"]):first').length == 0) {
                                    swal.fire({
                                        html: "No available shipping method in selected address"
                                    });
                                } else {
                                    if (allItemsAvailable == true) {
                                        // if($('[name*="Pickup"]').prev('input').prop('checked') && getCookie('pickUp') == 'false') {
                                        if(($('[name*="Pickup"]').prev('input').prop('checked') || $('[name*="Same Day Delivery"]').prev('input').prop('checked')) && (getCookie('pickUp') == 'false' && getCookie('sameDay') == 'false')){
                                            e.preventDefault();
                                            let html = `<p>Please select a shipping option.</p>`
                                            swal.fire({
                                                html: html
                                            });
                                        }else {
                                            var checkingContinueButton = setInterval(() => {
                                                if (!$("#checkout-shipping-continue").attr('disabled')) {
                                                    // do sth if disabled
                                                    $('#checkout-shipping-continue').trigger('click');
                                                    clearInterval(checkingContinueButton);
                                                    $('.checkout-step.optimizedCheckout-checkoutStep.checkout-step--customer [data-test="step-edit-button"]').show();
                                                    $('.checkout-step.optimizedCheckout-checkoutStep.checkout-step--billing [data-test="step-edit-button"]').show();

                                                    $('.checkout-step.optimizedCheckout-checkoutStep.checkout-step--customer .checkout-view-header').removeAttr('style');
                                                    $('.checkout-step.optimizedCheckout-checkoutStep.checkout-step--customer .stepHeader').removeAttr('style');
                                                    $('.checkout-step.optimizedCheckout-checkoutStep.checkout-step--billing .stepHeader').removeAttr('style');
                                                }
                                            }, 200);
                                        }
                                    }
                                }
                            }
                        });
                    });
                });
                $('body').on('click', '.confirmPickup', function () {
                    setCookie('CommentPickup', $('#CommentPickup')[0].value, 365);
                    setCookie('PickupType', $('#PickupType')[0].value, 365);
                    var storeID = getCookie("storeSelectedID");
                    var allItemsAvailable;
                    if (trackingInventroy == "True") {
                        allItemsAvailable = checkAvailability(storeID);
                    }
                    else {
                        allItemsAvailable = true;
                    }
                    if (allItemsAvailable == true) {
                        if ($('#shippingAddresses').length > 0) {
                            setTimeout(() => {
                                document.querySelector('.dropdownTrigger').click();
                                setTimeout(() => {
                                    document.querySelectorAll('.dropdown-menu-item.dropdown-menu-item--select a:first-child')[0].click();
                                });
                            });
                        }

                        var checkingForm = setInterval(() => {
                            if ($('#checkoutShippingAddress .dynamic-form-field.dynamic-form-field--firstName').length > 0) {
                                clearInterval(checkingForm);
                                // $('body .buttonsWrapper').hide();
                                // $('body #pickUpSection h1').hide();
                                if ($('#sameAsBilling').attr('value') == 'true') {
                                    $('body [for="sameAsBilling"]').trigger('click');
                                }
                                if ($('.checkout-form input[name="shippingAddress.shouldSaveAddress"]').attr('value') == 'true') {
                                    $('body .checkout-form [for="shippingAddress.shouldSaveAddress"]').trigger('click');
                                }
                                //here
                                myStore = getCurrentStore(getCookie("storeSelectedID"));
                                console.log('///////////my store///////');
                                console.log(myStore);
                                changeValue($('#firstNameInput').get(0), myStore.StoreName);
                                changeValue($('#lastNameInput').get(0), 'Store');
                                changeValue($('#addressLine1Input').get(0), myStore.StateAddress);
                                changeValue($('#companyInput').get(0), ' ');
                                changeValue($('#phoneInput').get(0), myStore.StorePhone);
                                changeValue($('#cityInput').get(0), myStore.City);
                                changeValue($('#postCodeInput').get(0), myStore.ZipCode);
                                var datePickerText = $('#datepicker-container input').val() + ' ' + $("#allTimes option:selected").val();
                                var datePickerElement;
                                var sfsElement;
                                var ifNotHomeElement;
                                $("#checkoutShippingAddress .checkout-address label").each(function () {
                                    if ($(this).text().includes("DatePickUp")) {
                                        datePickerElement = $(this).next("input").get(0);
                                    }
                                    if ($(this).text().includes("Ship from store")) {
                                        sfsElement = $(this).next("input").get(0);
                                        changeValue(sfsElement, "");
                                    }
                                    if ($(this).text().includes("If not home")) {
                                        ifNotHomeElement = $(this).next("select").get(0);
                                        changeSelectValue(ifNotHomeElement, "");
                                    }
                                });
                                changeValue(datePickerElement, datePickerText);

                                changeSelectValue($('#countryCodeInput').get(0), myStore.Country);
                                if ($('#provinceInput').length > 0) {
                                    changeValue($('#provinceInput').get(0), myStore.State);
                                }
                                if ($('#provinceCodeInput').length > 0) {
                                    changeSelectValue($('#provinceCodeInput').get(0), myStore.State);
                                }

                                $('[name*="Pickup"]').trigger('click');
                                
                                var orderComment = 'pickup_type:' + getCookie("PickupType") + '~' + getCookie("CommentPickup");
                                changeValue($('#orderComment').get(0), orderComment);
                                
                                var checkingContinueButton = setInterval(() => {
                                    console.log($('[name*="Pickup"]').prev('input'), `$('[name*="Pickup"]').prev('input').prop('checked')`)
                                    console.log($('[name*="Pickup"]').prev('input').prop('checked') == undefined, `$('[name*="Pickup"]').prev('input').prop('checked')`)
                                    if($('[name*="Pickup"]').prev('input').prop('checked') == false || $('[name*="Pickup"]').prev('input').prop('checked') == undefined){
                                        $('[name*="Pickup"]').trigger('click');
                                        if (!$("#checkout-shipping-continue").attr('disabled')) {
                                            $('[name*="Pickup"]').trigger('click');
                                            // do sth if disabled
                                            $('#checkout-shipping-continue').trigger('click');
                                            clearInterval(checkingContinueButton);
                                            $('.checkout-step.optimizedCheckout-checkoutStep.checkout-step--customer [data-test="step-edit-button"]').show();
                                            $('.checkout-step.optimizedCheckout-checkoutStep.checkout-step--billing [data-test="step-edit-button"]').show();
                                            $('.checkout-step.optimizedCheckout-checkoutStep.checkout-step--customer .checkout-view-header').removeAttr('style');
                                            $('.checkout-step.optimizedCheckout-checkoutStep.checkout-step--customer .stepHeader').removeAttr('style');
                                            $('.checkout-step.optimizedCheckout-checkoutStep.checkout-step--billing .stepHeader').removeAttr('style');
                                        }
                                    }else{
                                        if (!$("#checkout-shipping-continue").attr('disabled')) {
                                            $('[name*="Pickup"]').trigger('click');
                                            // do sth if disabled
                                            $('#checkout-shipping-continue').trigger('click');
                                            clearInterval(checkingContinueButton);
                                            $('.checkout-step.optimizedCheckout-checkoutStep.checkout-step--customer [data-test="step-edit-button"]').show();
                                            $('.checkout-step.optimizedCheckout-checkoutStep.checkout-step--billing [data-test="step-edit-button"]').show();
                                            $('.checkout-step.optimizedCheckout-checkoutStep.checkout-step--customer .checkout-view-header').removeAttr('style');
                                            $('.checkout-step.optimizedCheckout-checkoutStep.checkout-step--customer .stepHeader').removeAttr('style');
                                            $('.checkout-step.optimizedCheckout-checkoutStep.checkout-step--billing .stepHeader').removeAttr('style');
                                        }
                                    }
                                }, 500);
                            }
                        }, 200);
                    }
                });
            }

            function clearShippingFields() {
                changeValue($('#orderComment').get(0), '');
                changeValue($('#firstNameInput').get(0), '');
                changeValue($('#lastNameInput').get(0), '');
                changeValue($('#addressLine1Input').get(0), '');
                changeValue($('#companyInput').get(0), '');
                changeValue($('#phoneInput').get(0), '');
                changeValue($('#cityInput').get(0), '');
                changeValue($('#postCodeInput').get(0), '');
                changeValue('#' + datePickUp + '', '');
                changeSelectValue($('#countryCodeInput').get(0), '');
                if ($('#provinceInput').length > 0) {
                    changeValue($('#provinceInput').get(0), '');
                }
                if ($('#provinceCodeInput').length > 0) {
                    changeSelectValue($('#provinceCodeInput').get(0), '');
                }
            }

            function methodSelection() {
                $('body').on('click', '.delivery', '.pickup', function () {
                    if (getCookie('pickUp') == 'false') {
                        clearShippingFields();
                    }
                });
            }

            function continueWithShipping() {

                document.getElementById("checkout-shipping-continue").addEventListener('click', function(e){ 

                  if(($('[name*="Pickup"]').prev('input').prop('checked') || $('[name*="Same Day Delivery"]').prev('input').prop('checked')) && (getCookie('pickUp') == 'false' && getCookie('sameDay') == 'false')) {
                      e.preventDefault();

                      let html = `<p>Please select a shipping option.</p>`
                      swal.fire({
                          html: html
                      });
                  }
                  else {
                    $('.checkout-step.optimizedCheckout-checkoutStep.checkout-step--customer [data-test="step-edit-button"]').show();
                    $('.checkout-step.optimizedCheckout-checkoutStep.checkout-step--billing [data-test="step-edit-button"]').show();

                    $('.checkout-step.optimizedCheckout-checkoutStep.checkout-step--customer .stepHeader').removeAttr('style');
                    $('.checkout-step.optimizedCheckout-checkoutStep.checkout-step--billing .stepHeader').removeAttr('style');
                  }
                  setTimeout(function(){
                    if(document.getElementById("checkout-shipping-continue").classList.value.includes("is-loading")){
                        $('.checkout-step.optimizedCheckout-checkoutStep.checkout-step--customer [data-test="step-edit-button"]').show();
                        $('.checkout-step.optimizedCheckout-checkoutStep.checkout-step--billing [data-test="step-edit-button"]').show();
        
                        $('.checkout-step.optimizedCheckout-checkoutStep.checkout-step--customer .stepHeader').removeAttr('style');
                        $('.checkout-step.optimizedCheckout-checkoutStep.checkout-step--billing .stepHeader').removeAttr('style');
                    } else {
                          console.log("don't show buttons");
                    }
                  });
                });
            }

            function toStandardTime(militaryTime) {
                militaryTime = militaryTime.split(':');
                if (militaryTime[0].charAt(0) == 1 && militaryTime[0].charAt(1) == 2) {
                    return '12:' + militaryTime[1] + ' PM';
                } else if (militaryTime[0].charAt(0) == 1 && militaryTime[0].charAt(1) > 2) {
                    return (militaryTime[0] - 12) + ':' + militaryTime[1] + ' PM';
                } else {
                    return (militaryTime.join(':') + ' AM').replace(':00 AM', ' AM');
                }
            }

            function pickDate() {
                $('body').on('change', '.datePicker', function () {
                    datePicked = $(this).val();
                    var date = new Date();
                    var storeid = $('body #pickUpSection .myStore').attr('storeid');
                    var requestdate = $('.datePicker').val();
                    var todaydate = date.getUTCFullYear() + "-" + (parseInt(date.getUTCMonth()) + 1) + "-" + date.getUTCDate();
                    var todaytime = date.getUTCHours() + ":" + date.getUTCMinutes();

                    var request = {};
                    request.requestdate = requestdate;
                    request.todaydate = todaydate;
                    request.storeid = storeid;
                    request.todaytime = todaytime;
                    console.log(request);
                    var allTimes = JSON.parse(ClickAndCollect.getTimes(request));
                    console.log(allTimes);
                    if (allTimes.length > 0) {
                        var allOptions = "<option value='NAN'>Select a time to pickup</option>";
                        $.each(allTimes, function (i, time) {
                            let standardTime = toStandardTime(time.Timeslot + ':00')
                            allOptions += "<option value='" + time.Timeslot + "'>" + standardTime + "</option>";
                        });
                        $("#allTimes").html(allOptions);
                        $("#timepicker-container").fadeIn();
                    }
                    else {
                        var html = `<p>No available times for pickup in the day selected</p>`
                        swal.fire({
                            html: html
                        });
                        $("body #allTimes").html('');
                        $("body #timepicker-container").fadeOut();
                        $('body .pickupButtonWrapper').fadeOut();
                        return;
                    }
                    if ($('body #allTimes').val() != 'NAN') {
                        $('body .pickupButtonWrapper').fadeIn();
                    }
                    else {
                        $('body .pickupButtonWrapper').hide();
                    }
                });
            }

            function pickTime() {
                $('body').on('change', '#allTimes', function () {
                    timePicked = $(this).val();
                    if ($(this).val() != 'NAN') {
                        $('body .pickupButtonWrapper').fadeIn();
                    }
                    else {
                        $('body .pickupButtonWrapper').hide();
                    }
                });
            }
        }

        if (window.location.pathname == '/checkout/order-confirmation') {
            setCookie('pickUp', 'null', 365);
            setCookie('CommentPickup', '', 365);
            setCookie('PickupType', '', 365);
            let orderID;
            let storeID = getCookie("storeSelectedID");
            let data = {};
            let checkOrderId = setInterval(() => {
                if($('[data-test="order-confirmation-order-number-text"]').length>0) {
                    clearInterval(checkOrderId);
                    orderID = $('[data-test="order-confirmation-order-number-text"]').find('strong').text();
                    if (storeID.length > 0) {
                        data.orderid = orderID;
                        data.storeid = storeID;
                        ClickAndCollect.sendOrderInfo(data);
                    }
                }
            }, 200);
        }


        


    }


});