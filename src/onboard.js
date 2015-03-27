(function(global, $) {
    if (typeof global.onBoard === 'function') return;

    var version = '0.0.1';

    var onBoard = {
        start: function() {
            // Start at first step
            this.currentStep = 0;
            // Show the onboarding guide
            this.element.addClass('shown');
        },
        hide: function() {
            this.element.removeClass('shown');
        },
        toggle: function() {
            this.element.toggleClass('shown');
        },
        defaults: {
            helpText: 'Tips'    
        },
        init: function(steps, options) {
            // Create the wrapper
            var that = this,
                animationSpeed = 150,
                stepsCount = steps.length,
                settings = $.extend({}, this.defaults, options),
                $body = $('body'),
                $wrapper = $('<div/>', {
                    class: 'onboard--wrapper'
                }),
                $inner = $('<div/>', {
                    class: 'onboard--inner'
                }),
                $steps = $('<div/>', {
                    class: 'onboard--steps'
                }),
                $close = $('<div/>', {
                    class: 'onboard--close',
                    html: '<a rel="onboard--trigger">' + settings.helpText + '</a>'
                }),
                $prev = $('<div/>', {
                    class: 'onboard--controls onboard--controls--prev',
                    html: '<a>&lt;</a>'
                }),
                $next = $('<div/>', {
                    class: 'onboard--controls onboard--controls--next',
                    html: '<a>&gt;</a>'
                }),
                $step,
                step,
                i = 0;
            // For each step, create the markup
            for (; i < steps.length; i += 1) {
                step = steps[i];
                // Create the element
                $step = $('<div/>', {
                    class: 'onboard--step'
                });
                // Add the media and caption
                $step.append($('<img/>', {
                    class: 'onboard--step--media',
                    src: step.mediaUrl
                })).append($('<div/>', {
                    class: 'onboard--step--caption',
                    html: step.caption
                }));
                // Add to $steps
                $steps.append($step);
            }
            // Attach event handlers
            $wrapper.on('click', '.onboard--controls', function(evt) {
                var $this = $(evt.target),
                    curStep = that.currentStep,
                    // Direction = 1 --> next, -1 --> previous
                    direction = $this.hasClass('onboard--controls--prev') ? -1 : 1;
                    $curStep = $wrapper.find('.onboard--step').eq(curStep % stepsCount),
                    $nextStep = $wrapper.find('.onboard--step').eq((curStep + direction) % stepsCount);                

                // Hide the current step, show the next or prev one
                $curStep.stop().fadeOut(animationSpeed, function() {
                    $nextStep.stop().fadeIn(animationSpeed);
                    that.currentStep += direction;
                });
            });
            // Any trigger would toggle the onboarding
            $(document).on('click', '[rel*=onboard--trigger]', function(evt) {
                evt.stopPropagation();
                that.toggle();
                evt.preventDefault();
            });
            // Add all these to the DOM
            $body.append($wrapper.append($close).append($inner.append($prev).append($next).append($steps)));
            // Save a pointer to the element
            that.element = $wrapper;
            
            return that;
        },
        currentStep: 0,
        version: version
    };

    global.onBoard = onBoard;
})(this, jQuery);