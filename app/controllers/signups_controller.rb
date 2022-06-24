class SignupsController < ApplicationController


    def create
        signup = Signup.create(signup_params)
        byebug
        render json: signup
    end

    def destroy
        signup = Signup.find(params[:id])
        signup.destroy
        head :no_content
    end

    private

    def signup_params
        params.permit(:volunteer_id, :event_id)
    end
end
