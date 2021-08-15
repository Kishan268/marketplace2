<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Laravel\Passport\Passport;
use Carbon\Carbon;


class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'App\Models\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();
    //     // if (! $this->app->routesAreCached()) {
            Passport::routes();
    //     // }
    //     // Passport::loadKeysFrom(__DIR__.'/../secrets/oauth');
            Passport::personalAccessTokensExpireIn(Carbon::now()->addDays(1));
            Passport::tokensExpireIn(now()->addMinutes(30));
    // Passport::refreshTokensExpireIn(now()->addMinutes(1));
    // Passport::personalAccessTokensExpireIn(now()->addMinutes(1));

        //
    }
}
