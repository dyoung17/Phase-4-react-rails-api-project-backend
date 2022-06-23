class SessionsController < ApplicationController


    def create
        volunteer = Volunteer.find_by!(username: params[:username])    
        if volunteer&.authenticate(params[:password])
          session[:volunteer_id] = volunteer.id
            render json: volunteer, status: :created
        else
          render json: {errors: "Invalid Password and/or Username"}, status: :unprocessable_entity
        end
    end

    def destroy
        session.delete :volunteer_id
        head :no_content
    end 
end